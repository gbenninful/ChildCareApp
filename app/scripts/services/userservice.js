'use strict';

angular.module('childCareAppApp')
  .factory('UserService', function (Azure) {

      function signUpNewUser(data, success, error) {

          Azure.signUpTable().insert(data).done(function (datax) {

              if (success) {
                  success(datax);
              }

          }, function (err) {

              if (error) {
                  error(err);
              }
          });

      }

      function getAllUsers(success, error) {
          Azure.signUpTable().read().done(function (newUsers) {

              if (success) {
                  //console.log(newUsers);
                  success(newUsers);
              }

          }, function (err) {

              if (error) {
                  console.log(err);
                  error(err);
              }
          })
      }

      return {
          signUpNewUser: signUpNewUser,
          getAllUsers: getAllUsers
      };
  });


