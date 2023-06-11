const mongoose=require('mongoose');

const habbitSchema = new mongoose.Schema({
    category:
    {
        type: String,
        required: true
    },
    habbit:
    {
        type: String,
        required: true
    },
    timeOfDay:
    {
        type: String,
        required: true
    }
    ,
    user:
    {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
},{
    timestamps: true
});

const Habbit = mongoose.model('Habbit', habbitSchema);

module.exports = Habbit;