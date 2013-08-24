angular.module("umbraco").controller("CWS.UserPickerController", function ($scope, $log, assetsService, userResource, notificationsService) {

    //$log.log("Start User Picker Controller");
    notificationsService.error("User Picker (Testing notifications)", "Start User Picker Controller");

    $log.log(userResource);

    userResource.getAll().then(function (userArray) {
        
        $log.log("Get All Users Returned");

        var myUsers = userArray;

        $log.log(myUsers);
    });

    //Set the value we save to Umbraco as the selectedUser itme in the scope
    $scope.model.value = $scope.selectedUser;

    $log.log("End User Picker Controller");

});
