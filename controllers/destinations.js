var Train = require('../models/train');

module.exports = {
create,
}
function create(req, res) {
    Train.findById(req.params.id, function(err, train){
        train.stations.push(req.body);
        train.save(function(err){
            res.redirect(`/trains${train._id}`);
        });
    });
 }