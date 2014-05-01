'use strict';

angular.module('childCareAppApp')
  .factory('Models', function () {
    
      var User = function (options) {
          options = options || {};
          this.firstName = options.firstName || "";
          this.lastName = options.lastName || "";
          this.city = options.city || "";
          this.email = options.email || "";
      };

    return {
        User: function() {return new User();}
    };
  });
