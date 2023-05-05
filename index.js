const express=require('express');
const port = 8000;
const cookieParser=require('cookie-parser');
const bodyParser=require('body-parser');
const app= express();
const db=require('./config/mongoose');
const session=require('express-session');
// for authentication
const passport=require('passport');
const passportLocal=require('./config/passport-local-strategy');
const MongoDBStore=require('connect-mongodb-session')(session);

//setup body parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static('./assets'));



// setup view engine
app.set('view engine', 'ejs');
app.set('views', './views');

// mongo store is used to store session cookies in db
const store = new MongoDBStore(
    {
        // database name its only taking url 
        uri: 'mongodb://localhost/trackMyHabbit',
        collection: 'mySession'
    },
    function(err)
    {
        console.log(err || 'connect-mongodb-session setup ok');
    }
); 
app.use(session({
    name: 'trackMyHabbit',
    secret: 'blahsomething',
    saveUninitialized:false,
    resave:false,
    cookie:{
        maxAge: (1000*60*100)
    }
}));

app.use(passport.initialize());
app.use(passport.session());

app.use(passport.setAuthenticateUser);

// this is for routes, it will automatically fetches the index.js in routes folder
app.use('/', require('./routes'));

app.listen(port, function(err)
{
    if(err)
    {
        console.log(`error in running express server ${err}`);
    }

    console.log(`express is running on port ${port}`);
});