'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = Schema({
    name: String,
    document: String
})

mongoose.model('user', userSchema)