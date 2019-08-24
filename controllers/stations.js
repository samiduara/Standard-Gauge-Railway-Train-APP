var expressSGR = require('../models/expressSGR');

module.exports = {
create,
}
function create(req, res) {
    expressSGR.findById(req.params.id, function(err, expressSGR){
        expressSGR.stations.push(req.body);
            expressSGR.save(function(err){
            res.redirect(`/expressSGRs${expressSGR._id}`);
        });
    });
 }