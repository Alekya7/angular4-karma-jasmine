
 var scope, controller, rootScope, firstController, secondScope;
describe('Person', function () {
beforeEach(function(){
    module('controllers');
   
});
 beforeEach(inject(function($rootScope, $controller){

    rootScope = $rootScope;
    scope = $rootScope.$new();
    secondScope = $rootScope.$new();
    controller = $controller;

    firstController = $controller('FirstController', {
        $scope: scope
      });
    secondController = $controller('SecondController', {
        $scope: secondScope
      });
    console.log(firstController);
    console.log(secondController);
  }));

  it('should have assigned pattern to number pattern', function(){
      expect(firstController).toBeDefined();
      expect(scope.numberPattern.test("100")).toBe(true);
      expect(scope.saveData()).toEqual('saved with controller1');
      expect(secondScope.saveData()).toEqual('saved with controller2');
  
    });

    it('should have assigned pattern to number pattern', function(){
      expect(secondController).toBeDefined();
      expect(secondScope.numberPattern.test("abcd")).toBe(true);
      expect(secondScope.saveData()).toEqual('saved with controller2');
  
    });

  });