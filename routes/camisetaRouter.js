const express = require('express')
const router = express.Router()
const camisetaController = require('../controllers/camisetaController')


router.get('/', camisetaController.camisetas)
router.get('/:id', camisetaController.camiseta)
router.get('/add', camisetaController.camisetaAddForm)
router.get('/add', camisetaController.camisetaAdd)
router.get('/edit/:id', camisetaController.camisetaUpdateForm)
router.get('/edit/:id', camisetaController.camisetaUpdate)
router.get('/del/:id', camisetaController.camisetaDelForm)
router.get('/del/:id', camisetaController.camisetaDel)


module.exports = router;