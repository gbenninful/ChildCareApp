'use strict';

angular.module('childCareAppApp')
  .controller('SignedusersCtrl', function ($scope, UserService, $location, Notifier) {
    
      init();

      function init() {

          UserService.getAllUsers(function (users) {
              $scope.users = users;
              $scope.$apply();
               Notifier.success("New users obtained");

          }, function (err) {

              console.log(err);
              Notifier.error("Failed getting new users");
          });
      }
     

      $scope.delete = function (userId) {

          UserService.deleteUser(userId, function (users) {

              Notifier.success("User was successfully deleted");

              init();

          }, function (errorObj) {

              Notifier.error("User delete operation failed");
          });

      }

      $scope.edit = function (userId) {
          $location.path("/edit/" + userId);

      }

  });
