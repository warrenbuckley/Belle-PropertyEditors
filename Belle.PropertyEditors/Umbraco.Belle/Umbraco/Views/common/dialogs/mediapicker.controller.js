//used for the media picker dialog
angular.module("umbraco")
    .controller("Umbraco.Dialogs.MediaPickerController",
        function ($scope, mediaResource, umbRequestHelper, entityResource, $log, imageHelper) {

            $scope.options = {
                url: umbRequestHelper.getApiUrl("mediaApiBaseUrl", "PostAddFile"),
                autoUpload: true,
                formData:{
                    currentFolder: -1
                }
            };

            $scope.submitFolder = function(e){
                if(e.keyCode === 13){
                    $scope.showFolderInput = false;

                    mediaResource
                    .addFolder($scope.newFolderName, $scope.options.formData.currentFolder)
                    .then(function(data){
                        
                        $scope.gotoFolder(data.id);
                    });
                }
            };

            $scope.gotoFolder = function(folderId){

                if(folderId > 0){
                    entityResource.getAncestors(folderId)
                        .then(function(anc){
                            anc.splice(0,1);  
                            $scope.path = anc;
                        });
                }else{
                    $scope.path = [];
                }
                
                //mediaResource.rootMedia()
                mediaResource.getChildren(folderId)
                    .then(function(data) {
                        $scope.images = data;
                        //update the thumbnail property
                        _.each($scope.images, function(img) {
                            img.thumbnail = imageHelper.getThumbnail({ imageModel: img, scope: $scope });
                        });
                    });

                $scope.options.formData.currentFolder = folderId;
            };
               

            $scope.$on('fileuploadstop', function(event, files){
                $scope.gotoFolder($scope.options.formData.currentFolder);
            });
            

            $scope.selectMediaItem = function(image) {
                if (image.contentTypeAlias.toLowerCase() == 'folder') {      
                    $scope.options.formData.currentFolder = image.id;
                    $scope.gotoFolder(image.id);
                }
                else if (image.contentTypeAlias.toLowerCase() == 'image') {
                    $scope.select(image);
                }
            };

            $scope.gotoFolder(-1);
        });