const nodeMailer = require('../config/nodemailer');

exports.newUser = (email)=>
{
    // console.log('innside newuser');
    let htmlContent = nodeMailer.renderTemplate({email:email}, '/users/welcome.ejs');

    // console.log('after rendering innside newuser', email);
    nodeMailer.transporter.sendMail({
        from: 'codingwa90@gmail.com',
        to: email,
        subject: "new user created",
        html: htmlContent
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