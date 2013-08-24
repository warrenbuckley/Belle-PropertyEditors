angular.module("umbraco").controller("CWS.RGBAController", function ($scope, $log, assetsService) {

    //tell the assetsService to load the bootstrap slider
    //libs from the plugin folder
    assetsService
        .loadJs("/app_plugins/RGBAEditor/lib/bootstrap-slider/bootstrap-slider.js")
        .then(function () {

            //Initiate sliders
            $('.slider').slider();

            //Update the preview DIV function...
            var RGBChange = function () {
                //Log...
                $log.log("Fired RGBCHange()");

                $scope.$apply(function () {
                    //Divide by 100 to get decimal needed for RGBA css
                    var alpha = a.getValue() / 100;

                    //Store the value as a CSV
                    $scope.model.value = [r.getValue(), g.getValue(), b.getValue(), alpha].join();

                    //Set the preview value, so we can update the view
                    $scope.preview = 'rgba(' + $scope.model.value + ')';
                });
            };

            //Slider values stored in data object
            var r = $('.red').slider().on('slideStop', RGBChange).data('slider');
            var g = $('.green').slider().on('slideStop', RGBChange).data('slider');
            var b = $('.blue').slider().on('slideStop', RGBChange).data('slider');
            var a = $('.alpha').slider().on('slideStop', RGBChange).data('slider');

            //this will be comma delimited 'r,g,b,a'
            if ($scope.model.value && (typeof $scope.model.value === "string")) {
                var splitVals = $scope.model.value.split(",");

                //Get values from split and set the sliders
                r.setValue(splitVals[0].trim());
                g.setValue(splitVals[1].trim());
                b.setValue(splitVals[2].trim());

                //Alpha convert back to full %
                var alphaConvert = splitVals[3].trim() * 100;
                a.setValue(alphaConvert);

                //set the preview background value
                $scope.preview = 'rgba(' + $scope.model.value + ')';
            }
        });

    //load the seperate css for the editor to avoid it blocking our js loading
    assetsService.loadCss("/app_plugins/RGBAEditor/lib/CWS-rgba.css");
    assetsService.loadCss("/app_plugins/RGBAEditor/lib/bootstrap-slider/slider.css");

});
