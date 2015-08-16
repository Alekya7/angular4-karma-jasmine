describe('Person', function () {
 beforeEach(module('differentWays'));
  var serviceWay, factoryWay, providerWay;
 
  beforeEach(inject(function (asService, asFactory,asProvider) {
    Person = myApp;
    serviceWay = asService;
    factoryWay = asFactory;
    providerWay = asProvider;
  }));

  describe('Constructor', function () {

    it('assigns a name', function () {
      expect(serviceWay).toBeDefined();
      expect(factoryWay).toBeDefined();
      expect(providerWay).toBeDefined();
    });

    it('assigns a name', function () {
    expect(serviceWay.sayHello()).toEqual('From Service');
    expect(factoryWay.sayHello()).toEqual('From Factory');
    expect(providerWay.sayHello()).toEqual('From, Provider!');
  
    });

  });

});