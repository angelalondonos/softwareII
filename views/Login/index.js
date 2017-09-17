exports.ingresar = (req, res) => {
  const item = req.body
  console.log(item)
  req.app.db.models.login.create(item, (err, data) => {
    if (err) {
      console.log('fallo al ingresar! ' + err)
      res.send(['ERROR'])
    } else {
      res.send(['OK'])
    }
  })
}

exports.buscar = (req, res) => {
  const id = req.params.id;
  req.app.db.models.login.findOne({'_id':id}, (err, data) =>{
    if (err) {
      res.send(err)
    } else {
      res.send(data)
    }
  })
}