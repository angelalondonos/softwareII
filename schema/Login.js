'use strict'

exports = module.exports = function (app, mongoose) {
  var loginSchema = new mongoose.Schema({
    userName: String,
    password: String
  })
    loginSchema.set('autoIndex', (app.get('env') === 'development'))
    app.db.model('login', loginSchema)
}