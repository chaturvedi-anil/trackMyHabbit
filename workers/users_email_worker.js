const queue=require('../config/kue');

const userMailer=require('../mailers/users_mailer');

queue.process('newUser', function(job, done)
{
    console.log('inside worker', job.data);

    done();
})