var express = require('express');
var router = express.Router();
var stationCtrl = require('../controllers/stations');



router.post('/expressSGR/:id/stations', stationCtrl.create);





module.exports = router;