var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const destinationSchema = new Schema({
    station: {
        type: String,
        enum: ['NAIROBI', 'MOMBASA',]
    },
    arrival: Date
});

var ticketSchema = new Schema({
  seat: {
      type: String,
      match: /[A-F][1-9]\d?/
  },
  price: {
      type: Number,
      min: 0
  },
  expressSGRs: [{type: Schema.Types.ObjectId, ref: 'expressSGR'}]
}, { timestamps: true });

module.exports = mongoose.model('Ticket', ticketSchema);
