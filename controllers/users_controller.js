const User=require('../models/users');
module.exports.profile = function(req, res)
{
    return res.render('profile',{
        title: 'User Profile'
    });
}
module.exports.signIn = function(req, res)
{
    return res.render('sign_in',{
        title: 'Sing In'
    });
}

module.exports.singUp = function(req, res)
{
    return res.render('sign_up',{
        title: 'Sign Up'
    });
}

module.exports.createUser = function(req, res)
{
    let user=User.findOne({email:req.body.email})
    .then((user)=>
    {   
        if(!user)
        {
            if(req.body.password == req.body.confirm_password)
            {
                User.create(req.body);
                console.log(`user created`);

                return res.redirect('/users/sign_in');
            }

            console.log(`password and confirm password should be same`);
            return res.redirect('/users/sign_up');
        }
    })
    .catch((err)=>
    {
        console.log(`error in creating user ${err}`);
        return res.redirect('/users/sign_up');
    });
}