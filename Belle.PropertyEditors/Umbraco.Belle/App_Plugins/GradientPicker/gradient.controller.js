angular.module("umbraco").controller("CWS.GradientController", function ($scope, $log, assetsService) {

    //tell the assetsService to load the bootstrap slider
    //libs from the plugin folder

    assetsService.loadJs("/app_plugins/GradientEditor/lib/js/jquery.colorpicker.js");

    assetsService
        .loadJs("/app_plugins/GradientEditor/lib/js/jquery.classygradient.js")
        .then(function () {

            //Initiate Gradient
            $('.gradient').ClassyGradient({
                gradient: '#ebf1f6 0%,#ff9cff 40%,#ff6aff 61%,#ff2db7 100%',
                target: '.gradient-preview'
            });
           
        });

    //load the seperate css for the editor to avoid it blocking our js loading
    assetsService.loadCss("/app_plugins/GradientEditor/lib/css/jquery.colorpicker.css");
    assetsService.loadCss("/app_plugins/GradientEditor/lib/css/jquery.classygradient.css");

});
