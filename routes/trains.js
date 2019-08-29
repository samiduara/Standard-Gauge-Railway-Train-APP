var express = require('express');
var router = express.Router();
var trainCtrl = require('../controllers/trains');

router.get('/', trainCtrl.index); 
router.get('/new', trainCtrl.new); 
router.post('/', trainCtrl.create); 
router.get('/:id', trainCtrl.show);  
router.post('/:id',trainCtrl.delete);
router.post('/facts', isLoggedIn, trainCtrl.addFact);



function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect('/auth/google');
  }

module.exports = router;