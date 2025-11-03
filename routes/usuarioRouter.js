const express = require('express')
const router = express.Router()
const usuarioController = require('../controllers/usuarioController')

// Rutas para gestión administrativa de usuarios
router.get('/', usuarioController.usuarios)
router.get('/add', usuarioController.usuarioAddForm)
router.post('/add', usuarioController.usuarioAdd)
router.get('/update/:id', usuarioController.usuarioUpdateForm)
router.post('/update/:id', usuarioController.usuarioUpdate)
router.get('/del/:id', usuarioController.usuarioDeleteForm)
router.post('/del/:id', usuarioController.usuarioDelete)
router.get('/:id', usuarioController.usuario)

module.exports = router