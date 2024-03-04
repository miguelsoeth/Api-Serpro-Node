const express = require('express');
const router = express.Router();
// CONTROLLERS
const serproCpfController = require('./controllers/serproCpfController');
// MIDDLEWARES
const serproMiddleware = require('./middleware/serproMiddleware');

router.get('/serprocpf/:doc', serproMiddleware.validateCpf, serproCpfController.ConsultarCPF);

module.exports = router;