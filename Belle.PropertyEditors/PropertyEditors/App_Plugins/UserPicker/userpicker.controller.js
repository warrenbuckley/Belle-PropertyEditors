angular.module("umbraco").controller("CWS.UserPickerController", function ($scope, $log, assetsService, userResource, notificationsService) {

    //Start log message
    $log.log("Start User Picker Controller");
   
    //Try and getAll() users
    userResource.getAll().then(function (userArray) {
        
        //Log message - we got the users
        $log.log("Get All Users Returned");

        //Get the array of users back from getAll()
        var users = userArray;
        
        //Log the array
        $log.log(users);

        //Set the users variable into our scope
        $scope.users = users;
    });
    
    //now we need to check if the value is null/undefined, if it is we need to set it to "" so that any value that is set
    // to "" gets selected by default
    if ($scope.model.value === null || $scope.model.value === undefined) {
        $scope.model.value = "";
    }

    //Ending log message
    $log.log("End User Picker Controller");

});
