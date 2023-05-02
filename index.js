const express=require('express');
const port = 8000;
const cookieParser=require('cookie-parser');
const bodyParser=require('body-parser');
const app= express();
const db=require('./config/mongoose');

// for authentication
const passport=require('passport');
const passportLocal=require('./config/passport-local-strategy');

//setup body parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
// setup view engine
app.set('view engine', 'ejs');
app.set('views', './views');

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