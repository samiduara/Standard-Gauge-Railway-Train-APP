var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var destinationSchema = new Schema({
    station: {
        type: String
    },
    arrival: Date
});


var trainSchema = new Schema({
    station: {
        type: String,
        enum: ['Redline', 'Blueline']
    },
    trainNo: {
        type: Number,
        required: true,
        min: 2,
        max: 4
    },
    departs: {
        type: Date,
        default: function() {
            const date = new Date();
            const updatedYear = date.getFullYear() + 1;
            date.setFullYear(updatedYear);
            return date;
        }
    },
    destinations: [destinationSchema]
}, { timestamps: true });


module.exports = mongoose.model('Train', trainSchema);