'use strict';

angular.module('childCareAppApp')
  .factory('Models', function () {
    
      var User = function (options) {
          options = options || {};

          //Personal Info
          this.firstName = options.firstName || "";
          this.lastName = options.lastName || "";
          this.dateOfBirth = options.dateOfBirth || "";
          this.gender = options.gender || "";
          this.phoneNumber = options.phoneNumber || "";
          this.occupation = options.occupation || "";
          this.ssn = options.ssn || "";
          this.email = options.email || "";
          this.password = options.password;
          this.passwordConfirmation = options.passwordConfirmation;

          //Child/Parent/Guardian/Caregiver/Administrator
          this.userType = options.userType || "";

          //Address
          this.street = options.street || "";
          this.city = options.city || "";
          this.state = options.state || "";
          this.zipcode = options.zipcode || "";
      };





    return {
        User: function() {return new User();}
    };
  });
