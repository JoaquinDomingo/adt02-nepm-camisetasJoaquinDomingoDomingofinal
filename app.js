const express = require('express')
const session = require('express-session')
const mysql = require('mysql2')
const bodyParser = require('body-parser')
const path = require('path')
const app = express()
const port = 3000
const dotenv = require('dotenv')

dotenv.config({ path: '/stack.camisetas/.env'})


//cargo mis enroutadores

const camisetaRouter = require('./routes/camisetaRouter')

//Configuración de pug
app.set('view engine', 'pug')

app.use(bodyParser.urlencoded({extended: true}))
app.set('views', path.join(__dirname, 'views'))

app.get('/', (req, res) => {
  res.render('hola')
})

app.get('/login', (req, res) => {
  res.render('login')
})

app.post('/login', (req,res) => {
  const { username, password } = req.body
    res.send('Has hecho login con el usuario: ' + username + ' y la contraseña : ' + password )
})


app.use('/admin/camiseta', camisetaRouter)

app.get('/camisetas', (req, res) => {
  res.send('Listado de camisetas')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


