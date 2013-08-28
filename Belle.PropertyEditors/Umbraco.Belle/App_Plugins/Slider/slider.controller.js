angular.module("umbraco").controller("CWS.SliderController", function ($scope, $log, assetsService) {

    //tell the assetsService to load the bootstrap slider
    //libs from the plugin folder
    assetsService
        .loadJs("/app_plugins/Slider/lib/bootstrap-slider/bootstrap-slider.js")
        .then(function () {

            //Initiate sliders
            $('.slider-item').slider();

            //SlideChange()
            var SlideChange = function () {
                //Log...
                $log.log("Fired SlideChange()");

                $scope.$apply(function () {
                    //Get the value from the slider and set it to the value we save into Umbraco
                    $scope.model.value = slider.getValue();
                });
            };

            //Slider values stored in data object
            var slider = $('.slider-item').slider().on('slideStop', SlideChange).data('slider');

            var initVal = 0;

            //If no value saved yet - then use default value
            if ($scope.model.value === null || $scope.model.value === "") {
                
                $log.log("No value stored use inital value");
                
                initVal             = $scope.model.config.initValue;
                $scope.model.value  = $scope.model.config.initValue;
            }
            else {
                $log.log("Use value stored");
                initVal = $scope.model.value;
            }

            //Log initVal variable
            $log.log(initVal);

            //Set scope object to our variable
            $scope.initValue = initVal;
            
            //With the data attribute value set in the HTML slider not updated
            //May need to use function in plugin to update slider
            slider.setValue(initVal);

        });

    //load the seperate css for the editor to avoid it blocking our js loading
    assetsService.loadCss("/app_plugins/Slider/lib/bootstrap-slider/slider.css");

});
