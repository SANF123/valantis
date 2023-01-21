var nodemailer= require('nodemailer');
var transporter= nodemailer.creatTransport({
    host:'smtp.gmail.com',
    port:587,
    secure:false,
    requireTLS:true,
    auth:{
        user:'sanobar.clicksms@gmail.com',
        password:
    }
});
var mailOptions={
    from:'sanobar.clicksms@gmail.com',
    to:'nidhi.clicksms@gmail.com',
    subject:'check email',
    text:'hello this is the zone of enjoyement',
}

transporter.sendMail(mailOptions,function(error,info){
if(error)
{
    console.log(error);

}
else{
    console.log("email has been send",info.response);
}
})