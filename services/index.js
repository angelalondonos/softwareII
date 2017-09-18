'use strict'
/**
 * JSON JWT Web Token in REST API
 */


const jwt = require('jwt-simple') //encode and decode module for node.js  
const moment = require('moment') //
const index = require('../index')

/**
 * Creation token
 * @param {*} user 
 */
function createToken (user) {
  const payload = {
    sub: user._id, //id usuario
    iat: moment().unix(), //Date create token  
    exp: moment().add(14, 'days').unix() //expiration of token 
  }

  return jwt.encode(payload, index.SECRET_TOKEN)
}

function decodeToken (token) {
  const decoded = new Promise((resolve, reject) => {
    try {
      const payload = jwt.decode(token, index.SECRET_TOKEN)

      if (payload.exp <= moment().unix()) {
        reject({
          status: 401,
          message: 'El token ha expirado'
        })
      }
      resolve(payload.sub)
    } catch (err) {
      reject({
        status: 500,
        message: 'Invalid Token'
      })
    }
  })

  return decoded
}

module.exports = {
  createToken,
  decodeToken
}
