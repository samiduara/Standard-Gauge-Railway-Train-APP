var Train = require('../models/Train');
var Ticket = require('../models/tickets');

module.exports = {
    index,
    new: newTrain,
    create,
    show,
    deleteTrains,
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
                title: 'Train Detail',
                train,
                tickets
            });
        })
    });
}
function deleteTrains(req, res) {
    train.findByIdAndDelete(req.params.id, function(err, trains){
      if (err) return res.redirect('/flights');
        console.log(flight);
      res.redirect('/flights');
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