const mongoose=require('mongoose');

const habbitSchema = new mongoose.Schema({
    habbit:
    {
        type: String,
        required: true
    },
    timesofDay:
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