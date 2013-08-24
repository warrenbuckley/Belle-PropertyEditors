angular.module("umbraco").controller("CWS.UserPickerController", function ($scope, $log, assetsService, userResource) {

    $log.log("Start User Picker Controller");

    $log.log(userResource);

    var users = userResource.getAll();

    $scope.users = users;

    //Set the value we save to Umbraco as the selectedUser itme in the scope
    $scope.model.value = $scope.selectedUser;

    $log.log("End User Picker Controller");

});
