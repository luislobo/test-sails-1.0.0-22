/**
 * <%= filename %>
 *
 * @description :: A custom response method.
 * @docs        :: http://sailsjs.com/docs/concepts/custom-responses
 *
 * Usage:
 * ```
 * return res.<%= id %>()
 * return res.<%= id %>(data)
 * ```
 *
 * @param  {JSON?} data
 */

var _ = require('lodash');

module.exports = function resOk(data) {

  // Get access to `req` and `res`
  var req = this.req;
  var res = this.res;

  // Determine the status code to set.
  var statusCodeToSet = res.statusCode || 501;

  // Log a message, if desired.
  sails.log('Ran custom response: res.<%= id %>()');

  // If no data was provided, use res.sendStatus().
  if (_.isUndefined(data)) {
    return res.sendStatus(statusCodeToSet);
  }

  // If the data is an error instance and it doesn't have a custom .toJSON(),
  // use its stack instead (otherwise res.json() will turn it into an empty dictionary).
  if (_.isError(data)) {
    if (!_.isFunction(data.toJSON)) {
      data = data.stack;
    }
  }

  // Set status code and send response data.
  res.status(statusCodeToSet);
  return res.json(data);

};
