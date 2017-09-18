'use strict'

const express = require('express')
const productCtrl = require('../controllers/product')
const userCtrl = require('../controllers/user')
const auth = require('../middlewares/auth')
const api = express.Router()

app.post('/signin', userCtrl.signIn)
app.get('/private', auth, (req, res) => {
  res.status(200).send({ message: 'You have access' })
})

module.exports = app