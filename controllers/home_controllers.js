module.exports.home= function(req, res)
{
    return res.render('home', {
        title: 'Home'
    });
}

module.exports.contactDetails = function(req, res)
{
    return res.render('contact',{
        title: 'Contact Us'
    });
}