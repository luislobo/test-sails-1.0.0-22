/**
 * UserController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See http://sailsjs.com/docs/concepts/controllers
 */

module.exports = {

  find: function (req, res, next) {
    res.status(201).ok({nice: 'data'});
  }

};

