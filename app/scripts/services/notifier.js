'use strict';

angular.module('childCareAppApp')
  .factory('Notifier', function () {
   

    return {
        success: function (str) {
            toastr.success(str);
        },
        error: function (str) {
            toastr.error(str);
        }
    };
  });
