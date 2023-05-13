const mongoose=require('mongoose');

const userSchema =new mongoose.Schema({
    email:
    {
        type:String,
        required:true,
        unique: true
    },
    password:
    {
        type: String,
        required: true
    },
    name:
    {
        type: String,
        required: true
    },
    habbit:
    [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Habbit'
        }
    ]
},
{
    timestamps: true 
});

const User = mongoose.model('User', userSchema);

module.exports = User;