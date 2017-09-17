'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const loginSchema = Schema({
    userName: String,
    password: String
})

mongoose.model('Login', loginSchema)