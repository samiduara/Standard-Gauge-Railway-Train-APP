var mongoose = require('mongoose');
var Schema = mongoose.Schema;
// Will need to add tickets and seats
var ticketSchema = new Schema({
    seat: {
        type: String,
    },
    price: {
        type: Number,
        min: 0
    },
    train: [{type: Schema.Types.ObjectId, ref: 'Train'}]
}, { timestamps: true });

module.exports = mongoose.model('Ticket', ticketSchema);