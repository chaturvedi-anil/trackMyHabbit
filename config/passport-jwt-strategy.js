const passport=require('passport');
const JWTstrategy = require('passport-jwt').Strategy;
const ExtractJWT = require('passport-jwt').ExtractJwt;

const User = require('../models/users');
const JwtStrategy = require('passport-jwt/lib/strategy');

let opts ={
    jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
    secretOrKey : 'trackMyHabbit'
}

passport.use(new JwtStrategy(opts, function(jwtPayloads, done)
{
    User.findById(jwtPayloads._id)
    .then((user)=>
    {
        if(user)
        {
            return done(null, user);
        }
        else
        {
            return done(null, false);
        }
    })
    .catch((err)=>
    {
        console.log('error in finding the user in jwt');
        return;
    });
}));

module.exports = passport;