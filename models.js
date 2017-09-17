'use strict'

exports = module.exports = function (app, mongoose) {
  // embeddable docs first
  require('./schema/User')(app, mongoose)
  require('./schema/Login')(app, mongoose)
}