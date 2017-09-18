'use strict'

const express = require('express')
const userCtrl = require('../controllers/user')
const auth = require('../middlewares/auth')
const app = express.Router()

app.post('/signin', userCtrl.signIn)
app.get('/private', auth, (req, res) => {
  res.status(200).send({ message: 'You have access' })
})

module.exports = app