'use strict';

angular.module('childCareAppApp')
  .controller('SignupCtrl', function ($scope, Models, UserService, Notifier, $location) {

      init();

      function init() {
          $scope.user = Models.User();
      }

      $scope.signUp = function () {

          //console.log("I'm inside the signUp function");

          UserService.signUpNewUser($scope.user, function (data) {

              //console.log(data);

              Notifier.success("Your new user was signed up. This is Awesome");

              $location.path("/signedusers");
              $scope.$apply();

          }, function (err) {

              console.log(err);

              Notifier.error("Sorry, your new user was not signed up");
          });

      };

  });
