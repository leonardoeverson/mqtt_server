const nodemailer = require('nodemailer');

function mailer(){}

mailer.prototype.send_mail = function(to, link, token, token_id, callback){
    const transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        auth: {
            user: 'shad.quigley22@ethereal.email',
            pass: 'ZA2jTVaavfBBhq41eM'
        }
    });

    // Message object
    let message = {
        from: 'Sistemas de Envio de Emails <shad.quigley22@ethereal.email>',
        to: to,
        subject: 'Link para redefinição de senha',
        text: 'Link para redefinição de senha!',
        html: '<p><b>Link para redefinicão de senha: </b> http://localhost:3000/password/request/reset?request_id='+token+'&token_id='+token_id+'</p>'
    };

    console.log(message.html)
    // Create a SMTP transporter object
    transporter.sendMail(message, callback)
}
    

module.exports = function(){
    return mailer;
}