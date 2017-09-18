'use strict'

const express= require('express')
const bodyParser= require('body-parser')
const mongoose= require('mongoose')

const app= express()
const port = process.env.PORT || 3001
const hbs = require('express-handlebars')
const api = require('./routes')


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

module.exports = app

//mall refers to the name of the BD
mongoose.connect('mongodb://localhost/mall',(err,res) => {
	if(err) {
    console.log(`Error connecting database ${err}`)
    }
	console.log('Connection to the established database ')

    app.listen(port, ()=>{
    console.log(`API REST running http://localhosto:${port}`)
})

})
