'use strict';

angular.module('childCareAppApp')
  .controller('SignedusersCtrl', function ($scope, UserService, $location, Notifier) {
    
      UserService.getAllUsers(function (users) {
          $scope.users = users;
          $scope.$apply();
          //console.log(users);
          // Notifier.success("New users obtained");

      }, function (err) {

          console.log(err);
          //Notifier.error("Failed getting new users");
      });

      $scope.delete = function (index) {
          console.log("Inside the delete function");
          console.log($scope.users)
          console.log("Before splicing: " + $scope.users.length);

          $scope.users.splice(index, 1);
          console.log("After splicing: " + $scope.users.length);
          console.log($scope.users);

      }

  });
