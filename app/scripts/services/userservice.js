'use strict';

angular.module('childCareAppApp')
  .factory('UserService', function (Azure) {

      function signUpUser(data, success, error) {

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
          Azure.signUpTable().read().done(function (Users) {

              if (success) {
                  //console.log(Users);
                  success(Users);
              }

          }, function (err) {

              if (error) {
                  console.log(err);
                  error(err);
              }
          })
      }


      //function getAUser(success, error) {

      //    Azure.signUpTable().

      //}



      //function deleteUser(user, success, error) {

      //    Azure.signUpTable().read().done(function (users) {



      //    }, function () {


      //    });

      //}

      return {
          signUpUser: signUpUser,
          getAllUsers: getAllUsers
      };
  });


