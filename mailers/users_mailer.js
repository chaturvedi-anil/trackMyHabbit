const nodeMailer = require('../config/nodemailer');

exports.newUser = (email)=>
{

    nodeMailer.transporter.sendMail({
        from: 'codingwa90@gmail.com',
        to: email,
        subject: "new user created",
        html: '<h1> Your account is created on trackMyHabbit </h1>'
    }, (err, info)=>
    {
        if(err)
        {
            console.log('error in sending mail', err);
            return;
        }
        
        // console.log('mail deliverd', info);
        return;
    });
}