angular.module('dd',[])
  .factory('Person', function () {
    return function Person (name) {
      this.name = name;
    };
  });