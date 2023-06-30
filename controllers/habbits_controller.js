const Habbit = require('../models/habbits');
const User = require('../models/users');

module.exports.showDashboard = async function(req, res)
{ 
    let userId=req.user.id;
    let habbitsOfUser =await Habbit.find({user:userId});
    return res.render('dashboard', {
        title: 'Dashboard',
        habbit_list: habbitsOfUser
    });
}

module.exports.addNewHabbit = async function(req, res)
{
    // new habbit added in db 
    await Habbit.create(req.body);

    return res.redirect('back');
    
}