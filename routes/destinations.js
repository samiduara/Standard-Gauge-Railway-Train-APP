var express = require('express');
var router = express.Router();
var destinationCtrl = require('../controllers/destinations');

router.post('/trains/:id/destinations', destinationCtrl.create);


module.exports = router;