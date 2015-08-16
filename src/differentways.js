var myApp = angular.module('differentWays', []);

//service style, probably the simplest one
myApp.service('asService', function() {
    this.sayHello = function() {
        return "From Service"
    };
});

//factory style, more involved but more sophisticated
myApp.factory('asFactory', function() {
    return {
        sayHello: function() {
            return "From Factory"
        }
    };
});
    
//provider style, full blown, configurable version     
myApp.provider('asProvider', function() {

    this.name = 'Default';

    this.$get = function() {
        var name = this.name;
        return {
            sayHello: function() {
                return "From, " + name + "!"
            }
        }
    };

    this.setName = function(name) {
        this.name = name;
    };
});

//hey, we can configure a provider!            
myApp.config(function(asProviderProvider){
    asProviderProvider.setName('Provider');
});
        

