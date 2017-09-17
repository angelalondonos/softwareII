'use strict'

exports = module.exports = function (app, mongoose) {
  var userSchema = new mongoose.Schema({
    userId: String,
  })
    userSchema.set('autoIndex', (app.get('env') === 'development'))
    app.db.model('user', userSchema)
}