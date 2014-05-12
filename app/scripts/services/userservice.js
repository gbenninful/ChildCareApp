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
          Azure.signUpTable().read().done(function (users) {

              if (success) {
                  //console.log(Users);
                  success(users);
              }

          }, function (err) {

              if (error) {
                  console.log(err);
                  error(err);
              }
          })
      }

      function getUserById(userId, success, error) {
          Azure.signUpTable().where({ id: userId }).read().done(function (user) {

              if (success) {
                  success(user[0]);
                  console.log(user);
              }

          }, function (errObj) {
              error(errObj);
          })
      }

      function deleteUser(userId, success, error) {

          Azure.signUpTable().del({ id: userId }).done(function (users) {

              if (success) {

                  success(users);
                  console.log(users);
              }

          }, function (errorObject) {

              if (error) {
                  console.log(errorObject);
              }
          });

      }

      function updateUser(user, success, error) {

          Azure.signUpTable().update(user).done(function (user) {

              console.log(user);

          }, function (err) {

              console.log(err);
          })
      }

      return {
          signUpUser: signUpUser,
          getAllUsers: getAllUsers,
          getUserById: getUserById,
          deleteUser: deleteUser,
          updateUser: updateUser
      };
  });


