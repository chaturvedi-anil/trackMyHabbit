
module.exports.showDashboard = function(req, res)
{
    return res.render('dashboard', {
        title: 'Dashboard'
    });
}