const User=require('../models/users');
const userMailer = require('../mailers/users_mailer');
const queue=require('../config/kue');
const userWorkers=require('../workers/users_email_worker');

module.exports.profile = function(req, res)
{
    return res.render('profile',{
        title: 'User Profile'
    });
}
module.exports.signIn = function(req, res)
{
    if(req.isAuthenticated())
    {
        return res.redirect('/users/profile');
    }
    return res.render('sign_in',{
        title: 'Sing In'
    });
}

module.exports.singUp = function(req, res)
{
    if(req.isAuthenticated())
    {
        return res.redirect('/users/profile');
    }
    
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

                // userMailer.newUser(req.body.email);

                let job = queue.create('newUser', req.body.email).save(function(err)
                {
                    if(err)
                    {
                        console.log('error in creating a queue', err);
                        return;
                    }

                    console.log("job complete : ",job.id);
                });

                return res.redirect('/users/sign-in');
            }

            console.log(`password and confirm password should be same`);
            return res.redirect('/users/sign-up');
        }
    })
    .catch((err)=>
    {
        console.log(`error in creating user ${err}`);
        return res.redirect('/users/sign-up');
    });
}

// sign In
module.exports.createSession = function(req, res)
{
    req.flash('success', 'Logged in Successfully');
    return res.redirect('/');
}

// SignOut 
module.exports.destroySession = function(req, res)
{
    req.logout(function(err)
    {
        if(err)
        {
            console.log(`Error in logout function ${err}`);
            return;
        }
        req.flash('success', 'You have logged out successfully');
    });
    
    return res.redirect('/');
}