var mongoose = require('mongoose');
var Schema = mongoose.Schema;
const destinationSchema = new Schema({
    station: {
        type: String,
        enum: ['NAIROBI', 'MOMBASA',]
    },
    arrival: Date
});



