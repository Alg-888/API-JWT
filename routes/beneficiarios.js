const express = require('express');
const router = express.Router();
const beneficiarioController = require('../controllers/beneficiarioController');

router.get('/', beneficiarioController.mostrar);
router.post('/crear', beneficiarioController.crear);
router.post('/editar', beneficiarioController.editar);
router.delete('/borrar/:id', beneficiarioController.borrar);

module.exports = router;
