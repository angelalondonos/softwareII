'use strict'

const express= require('express')
const bodyParser= require('body-parser')
const mongoose= require('mongoose')

const app= express()
const port = process.env.PORT || 3001

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())



//setup routes
//require('./router')(app)

// config data models
//require('./models')(app, mongoose)


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
