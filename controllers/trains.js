var Train = require('../models/train');
var Ticket = require('../models/tickets');

module.exports = {
    index,
    new: newTrain,
    create,
    show,
    delete: deleteTrains,
    addFact
};

function index(req, res) {
    Train.find({}, function(err, train) {
        res.render('trains/index', {train});
    });
}

function show(req, res) {
    Train.findById(req.params.id, function(err, train) {
        Ticket.find({train: train._id}, function(err, tickets) {
            res.render('trains/show', {
                title: 'train Detail',
                train,
                tickets
            });
        })
    });
}

function addTicket(req, res) { 
    train.findById(req.params.id, function(err, train) {
        Ticket.find({}, function(err, tickets) {
            console.log(tickets);
            console.log(train);
            res.render('tickets/new', {title: 'Add Ticket', tickets, train});
        });
    });
};


function deleteTrains(req, res) {
    Train.findByIdAndDelete(req.params.id, function(err, train){
      if (err) return res.redirect('/trains');
        console.log(train);
      res.redirect('/trains');
    });
  };

function newTrain(req, res) {
    res.render('trains/new'); 
}

function create(req, res) {
    let destination;
    for(let key in req.body){
        req.body[key] === '' && delete req.body[key];
    }
    if (req.body.destination) {
        destination = req.body.destination 
        delete req.body["destination"];
    }
    Train.create(req.body, function(err, train) {
        console.log(err)
        train.destinations.push(destination)
        train.save(function(err) {
            res.redirect('/trains');
        });
    });
}

function addFact(req, res) {

}