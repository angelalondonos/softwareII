'use strict'

const User = require('../models/user')
const service = require('../services')

/**
 * Function User sing up
 * @param {*} req 
 * @param {*} res 
 */
function signUp(req, res) {
    const user = new user({
        email: req.body.email,
        displayName: req.body.displayName,
        password: req.body.password
    })

    //save user
    user.save((err) => {
        if (err) return res.status(500).send({ message: `Error create user: ${err}` })

        return res.status(201).send({ token: service.createToken(user) })
    })
}

/**
 * Function Users sing in 
 * @param {*} req 
 * @param {*} res 
 */
function signIn(req, res) {
    User.find({ email: req.body.email }, (err, user) => {
        if (err) return res.status(500).send({ message: err })
        if (!user) return res.status(404).send({ message: 'No existe el usuario' })

        req.user = user
        res.status(200).send({
            message: 'Te has logueado correctamente',
            token: service.createToken(user)
        })
    })
}



module.exports = {
    signUp,
    signIn
}
