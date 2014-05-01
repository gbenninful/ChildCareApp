'use strict';

angular.module('childCareAppApp')
  .factory('Azure', function () {
    
      var client = new WindowsAzure.MobileServiceClient("https://careapp.azure-mobile.net/", "NMUkhmjSjPEKVVLFGLGOmBVNNirYJh27");

      function getSignUpTable() {

          return client.getTable("signup");
      }


      return {
          signUpTable: getSignUpTable
      }
  });


