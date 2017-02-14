/**
 * User.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: http://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
/* mongo id
    id: {
      type: 'string',
      columnName: '_id'
    },
*/
    luckyNumber: {
      type: 'number',
      unique: true,
      required: true
    },
    bestFriend: {
      model: 'User'
    },
    friends: {
      collection: 'User',
      via: 'id'
    },
    favoriteProducts: {
      collection: 'Product',
      via: 'id'
    },
  },
  datastore: 'default'

};

