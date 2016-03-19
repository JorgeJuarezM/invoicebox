/// <reference path="../typings/tsd.d.ts" />
/// <reference path="../services/Customer.ts" />

interface ICustomerHomeScope {
  customers: ICustomer[]
}


angular.module("cfdi").controller('customersHomeController', ['$scope', 'Customer', ($scope:ICustomerHomeScope, Customer)=> {
  Customer.getAll().then((results)=> {
    console.log(results);
    $scope.customers = results;
  });
}]);
