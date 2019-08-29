var Train = require('../models/train');

module.exports = {
create,
}
function create(req, res) {
    Train.findById(req.params.id, function(err, train){
        console.log("train", train)
        train.destinations.push(req.body);
        train.save(function(err){
            res.redirect(`/trains/${train._id}`);
        });
    });
 }