const express = require('express')
const app = express()
const port = 8080

app.get('/', (req, res) => {
  res.send('Hola desde el Lenguaje Nodejs!!!')
})

app.listen(port, () => {
  console.log("App listening on port 8080")
})