const nodemailer = require('nodemailer');
const mailGun = require('nodemailer-mailgun-transport');

const auth = {
    auth: {
        api_key: 'ec9aa2b865f636b26efaeb65a8ada736-07e45e2a-7d12c0c0',
        domain: 'sandboxfd7073bb33ec4bb8835ba37eb70e7c7f.mailgun.org'
    }
}


const transporter = nodemailer.createTransport(mailGun(auth));

const sendMail = (email,cb) =>{
    const mailOptions = {
        from: 'no-reply@yahoo.com',
        to: email,
        subject: "Password Reset !",
        html:`
        <p> Hi! {email} </p>
        <h5>You can setup your password<a href="http://localhost:3000/reset/"> here </a></h5>
        `
    }


// 
// subject
// text
// from
transporter.sendMail(mailOptions,(err, data)=> {
    if(err){
        cb(err,null);
    }
    else{
        cb(null , data);
    }
})
}

sendMail('', '', function(err,data){

});

module.exports = sendMail;