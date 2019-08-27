var express = require('express');
var router = express.Router();
var trainCtrl = require('../controllers/trains');

router.get('/', trainCtrl.index); // GET all trains

router.get('/new', trainCtrl.new); // serve form to add a new train form

router.post('/', trainCtrl.create); // POST / this will create and POST the new train to DB

router.get('/:id', trainCtrl.show);  // show details of single train (will lead to the ability to buy a ticket)

/* the two functions below do not have a corresponding controller function */
// router.delete('/:id', trainCtrl.delete); // this will delete all trains
// update train

router.post('/facts', isLoggedIn, trainCtrl.addFact);



function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect('/auth/google');
  }

module.exports = router;