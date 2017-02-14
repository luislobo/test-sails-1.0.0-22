/**
 * Product.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: http://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    id: {
      type: 'string',
      columnName: '_id'
    },
    cashier: {
      model: 'User'
    },
    luckyNumber: {
      type: 'number',
      required: true,
      unique: true
    },
    floobar: {
      type: 'json'
    },
    witnesses: {
      collection: 'User'
    }
  },
  datastore: 'mongo'
};

