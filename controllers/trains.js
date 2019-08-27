var Train = require('../models/Train');
var Ticket = require('../models/tickets');

module.exports = {
    index,
    new: newTrain,
    create,
    show,
    addFact
};

function index(req, res) {
    Train.find({}, function(err, Train) {
        res.render('trains/index', {Train});
    });
}

function show(req, res) {
    Train .findById(req.params.id, function(err, Train) {
        Ticket.find({Train: Train._id }, function(err, tickets) {
            res.render('Train/show', {
                title: 'Train Detail',
                Train,
                tickets
            });
        })
    });
}

function newTrain(req, res) {
    res.render('trains/new'); 
}

function create(req, res) {
    let destination;
    for(let key in req.body){
        req.body[key] === '' && delete req.body[key];
    }
    if (req.body.destination) {
        destination = { station: req.body.destination }
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