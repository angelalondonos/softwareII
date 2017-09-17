exports = module.exports = function (app) {
  /**
   * 
 /app.get('/users/', require('./views/Users/index').mostrar)
  app.post('/users/', require('./views/Users/index').ingresar)
  app.put('/users/', require('./views/Users/index').actualizar)
  app.delete('/users/', require('./views/Users/index').borrar)
  app.post('/users/:id', require('./views/Users/index').buscar)
  */
  app.post('/login/', require('./views/Login/index').ingresar)
  app.post('/login/:id', require('./views/Login/index').buscar)

}