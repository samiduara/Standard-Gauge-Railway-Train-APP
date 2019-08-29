var Ticket = require('../models/tickets');
var Train = require('../models/train');
module.exports = {
    new: newTicket,
    create,
    addTicket,
    delete: deleteTicket
};


function newTicket(req, res) { 
Train.findById(req.params.id, function(err, trains) {
      res.render('tickets/new', {title: 'Add Ticket', trains});
   });
};

function create(req, res) {
    Train.findById(req.params.id, function(err, train) {
        Ticket.create(req.body, function(err, ticket) {
            ticket.train.push(train._id);
            ticket.save(function(err, ticket) {
                res.redirect(`/trains/${train._id}`);
            });
        });
    });
}

function addTicket(req, res) {
    Train.findById(req.params.id, function(err, train) {
    Ticket.find({}, function(err, ticket) {
            ticket.train.push(train._id);
            ticket.save(function(err) {
            res.redirect(`/trains/${train._id}`);
        })
     });
 });
}

function deleteTicket (req,res) {
    Ticket.findByIdAndDelete(req.params.id, function (err, ticket) {
        res.redirect(`/trains/${train._id}`);
    })
 }






