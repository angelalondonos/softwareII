'use strict'
/**
 * User Registration and Authentication
 */
const services = require('../services')

/**
 * Function that validates that the author has permissions
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
function isAuth(req, res, next) {
  if (!req.headers.authorization) {
    return res.status(403).send({ message: 'You do not have permission' })
  }

  const token = req.headers.authorization.split(' ')[1]

  services.decodeToken(token)
    .then(response => {
      req.user = response
      next()
    })
    .catch(response => {
      res.status(response.status)
    })
}

module.exports = isAuth