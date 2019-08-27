var mongoose = require('mongoose');
var db = mongoose.connection;

mongoose.connect(process.env.DATABASE_URL || 'mongodb://localhost/27017/train',
    {useNewUrlParser: true, useCreateIndex: true}
);

db.on('connected', function() {
    console.log(`Connected to MongoDB at ${db.host}:${db.port}`);
});