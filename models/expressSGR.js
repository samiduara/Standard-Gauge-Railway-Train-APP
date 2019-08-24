var mongoose = require('mongoose');
var Schema = mongoose.Schema;
const destinationSchema = new Schema({
    station: {
        type: String,
        enum: ['NAIROBI', 'MOMBASA',]
    },
    arrival: Date
});

var expressSGRSchema = new mongoose.Schema({
    name: String,
    email: String,
    cohort: String,
    avatar: String,
    facts: [factSchema],
    googleId: String
  }, {
    timestamps: true
  });

