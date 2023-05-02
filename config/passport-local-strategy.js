const passport = require('passport');
const LocalStrategy = require('passport-local');
const User = require('../models/users');

passport.use(new LocalStrategy(
    {
        username:'email'
    },
    function(email, password, done)
    {
        User.findOne({email:email}, function(err, user)
        {
            if(err)
            {
                console.log(`Error in finding user in passport-local ${err}`);
                return done(err);
            }

            if(!user)
            {
                return done(null, false);
            }

            if(!user)
            {}
        });
    }
))