var Ticket = require('../models/tickets');
var Train = require('../models/train');
module.exports = {
    new: newTicket,
    create
};


function newTicket(req, res) {
    Train.findById(req.params.id, function(err, train) {
        res.render('tickets/new', { train});
    });
}   

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
