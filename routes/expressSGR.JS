var express = require('express');
var router = express.Router();
var expressSGRCtrl = require('../controllers/expressSGRs');


router.get('/', expressSGRCtrl.index);
router.post('/facts', isLoggedIn, expressSGRsCtrl.addFact);
function isLoggedIn(req, res, next) {
    if ( req.isAuthenticated() ) return next();
    res.redirect('/auth/google');
  }
module.exports = router;