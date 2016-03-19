/// <reference path="../typings/tsd.d.ts" />

import IPromise = angular.IPromise;
interface ICustomer extends ng.resource.IResource<ICustomer> {
  numeroCliente: number;
  nombre: string;
  rfc: string;
  nombreContacto: string;
}


interface ICustomerResource extends ng.resource.IResourceClass<ICustomer> {
  update(ICustomer): ICustomer
}


class Customer {

  private static resource:ICustomerResource;

  public numeroCliente:number;
  public nombre:string;
  public rfc:string;
  public nombreContacto:string;

  constructor(props:ICustomer) {
    this.numeroCliente = props.numeroCliente;
    this.nombre = props.nombre;
    this.rfc = props.rfc;
    this.nombreContacto = props.nombreContacto;
  }

  public static setResource(resource:ICustomerResource) {
    Customer.resource = resource;
  }

  public static getAll():ng.IPromise<Customer[]> {
    return Customer.resource.query().$promise.then((results:ICustomer[])=> {
      return results.map((result:ICustomer)=> {
        return new Customer(result);
      });
    });
  }

}


angular.module("cfdi").factory("CustomerResource", ['$resource', ($resource:ng.resource.IResourceService):ICustomerResource => {
  var updateAction:ng.resource.IActionDescriptor = {
    method: "PUT",
    isArray: false
  };

  return <ICustomerResource>$resource("/api/customers/:id", {
    id: "@id"
  }, {
    update: updateAction
  });

}]);


angular.module("cfdi").factory("Customer", ['CustomerResource', (CustomerResource:ICustomerResource)=> {
  Customer.setResource(CustomerResource);
  return Customer;
}]);
