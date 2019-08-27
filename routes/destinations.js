var express = require('express');
var router = express.Router();
var destinationCtrl = require('../controllers/stations');

router.post('/trains/:id/destination', destinationCtrl.create);


module.exports = router;