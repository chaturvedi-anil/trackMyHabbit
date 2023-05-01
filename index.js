const express=require('express');
const port = 8000;

const app= express();

app.get('/', function(req, res)
{
    return res.send('<h1> hello <h1>');
});

app.listen(port, function(err)
{
    if(err)
    {
        console.log('error in running express server');
    }

    console.log(`express is running on port ${port}`);
});