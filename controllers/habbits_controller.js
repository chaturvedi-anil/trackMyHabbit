module.exports.showDashboard = function(req, res)
{
    return res.render('dashboard', {
        title: 'Dashboard'
    });
}

module.exports.addNewHabbit = function(req, res)
{
    console.log(req);
}