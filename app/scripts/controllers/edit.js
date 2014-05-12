'use strict';

angular.module('childCareAppApp')
  .controller('EditCtrl', function ($scope, UserService, $routeParams, Notifier) {

      UserService.getUserById($routeParams.id, function (user) {

          $scope.user = user;
          $scope.$apply();
          console.log(user);

      }, function (errorObj) {

          console.log(errorObj);

      });

      $scope.update = function () {
          UserService.updateUser($scope.user, function () {

              console.log(successdata);
              Notifier.success("Update was successful");
          }, function () {

              console.log(errordata);
              Notifier.error("Update was unsuccessful");

          });

      }

  });
