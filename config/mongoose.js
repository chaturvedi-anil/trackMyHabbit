const mongoose=require('mongoose');

// Connect to the MongoDB database
mongoose.connect(`mongodb://localhost/habbit_Tracker`);

// Get a reference to the active database connection
const db=mongoose.connection;

// error handling
db.on('error', console.log.bind(console, 'Error in conncting mongodb'));

db.once('open', function()
{
    console.log('Successfully connected to database');
});

module.exports = db;