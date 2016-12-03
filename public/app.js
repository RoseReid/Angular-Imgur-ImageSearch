'use strict';

// Define the `imgurApp` module
//no dependencies injected therefore empty aray
var imgurApp = angular.module('imgurApp', []);

// Define the `PhoneListController` controller on the `imgurApp` module
imgurApp.controller('ImgurListController', ['$scope','$http', function ImgurListController($scope, $http) {
  //don't send anything in there and therefore don't need it
  const isImage = function(imageData){
    return !imageData.is_album;
  }
  $scope.search = function(){
    $http.get("/search?q=" + $scope.inputValue).
    then(function(res){
      console.log(res)
      $scope.images = res.data.data.filter(isImage);
    })
  }
}]);


//this is the controller
//this is where I get the data from the server. handle the search. and populate the module