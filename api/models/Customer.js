/**
 * Customer.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  attributes: {
    numeroCliente : {
      type      : "integer",
      primaryKey: true,
      required  : true
    },
    nombre        : {
      type    : "string",
      size    : 100,
      required: true
    },
    rfc           : {
      type    : "string",
      size    : 13,
      required: true
    },
    nombreContacto: {
      type    : "string",
      size    : 100,
      required: true
    }
  }
};

