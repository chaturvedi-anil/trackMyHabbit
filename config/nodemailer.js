const nodemailer=require('nodemailer');
const ejs=require('ejs');
const path=require('path');

let transporter = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
        user: 'codingwa90@gmail.com',
        pass: 'Coding90@'
    }
});

let renderTemplate = (data, relativePath)=>
{
    let mailHTML;
    ejs.renderFile(
        path.join(__dirname, '../view/mailer'),
        data,
        function(err, template)
        {
            if(err)
            {
                console.log('error in rendring template in nodemailer');
                return;
            }

            mailHTML = template;
             
        }   
    )

    return mailHTML;
}

module.exports={
    transporter:transporter,
    renderTemplate:renderTemplate
}