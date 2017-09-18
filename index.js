'use strict'

const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const app = express()
const port = process.env.PORT || 3000
const db = process.env.MONGODB_URI || 'mongodb://localhost:27017/mall'
const hbs = require('express-handlebars')
const api = require('./routes')

module.exports =  app

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.engine('.hbs', hbs({
  defaultLayout: 'default',
  extname: '.hbs'
}))
app.set('view engine', '.hbs')

app.use('/app', api)
app.get('/login', (req, res) => {
  res.render('login')
})

//mall refers to the name of the BD
mongoose.connect(db, (err, res) => {
  if (err) {
    console.log(`Error connecting database ${err}`)
  }
  console.log('Connection to the established database ')

  app.listen(port, () => {
    console.log(`API REST running http://localhost:${port}`)
  })

})



