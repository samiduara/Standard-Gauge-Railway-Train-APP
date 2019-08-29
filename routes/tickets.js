var express = require('express');
var router = express.Router();
var ticketCtlr = require('../controllers/tickets');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// I will need to add tickets POST/GET
router.get('/trains/:id/tickets/new', ticketCtlr.new);
router.post('/trains/:id/tickets', ticketCtlr.create);
router.delete('/trains/:id', ticketCtlr.delete);


module.exports = router;
