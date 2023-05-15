const passport = require('passport');
const googleStrategy = require('passport-google-oauth').OAuth2Strategy;
const crypto=require('crypto');
const User=require('../models/users');
const userMailer=require('../mailers/users_mailer');
const queue=require('../config/kue');

// tell passport to use google strategy
passport.use(new googleStrategy({
        clientID: "11858228011-jk13fdgch30bqkkpjt0qva8hh2dnhadb.apps.googleusercontent.com",
        clientSecret: "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",
        callbackURL: "http://localhost:8000/users/auth/google/callback"
    },

    function(accessToken, refreshToken, profile, done)
    {
        // find a user
        User.findOne({email: profile.emails[0].value})
        .then((user)=>
        {

            if(user)
            {
                // if user found, then set user as req.user
                return done(null, user);
            }
            else
            {
                // if user found not found then create the user and set as req.user
                User.create({
                    name: profile.displayName,
                    email: profile.emails[0].value,
                    password: crypto.randomBytes(10).toString('hex')
                })
                .then((user)=>
                {
                    // console.log(user);
                    // userMailer.newUser(user.email);
                    // console.log('usermailer executed');
                    let job = queue.create('newUser', req.body.email).save(function(err)
                    {
                        if(err)
                        {
                            console.log('error in creating a queue', err);
                            return;
                        }

                        console.log("job enqueued: ",job.id); 
                    }); 
                    return done(null, user);
                })
                .catch((err)=>
                {
                    console.log(`error in creating user in passport-google strategy ${err}`);
                    return done(err);
                });       
            }
        })
        .catch((err)=>
        {
            console.log(`error in google authentication ${err}`);
            return;
        });
    }
));
        
module.exports = passport;


