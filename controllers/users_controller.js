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
    
}