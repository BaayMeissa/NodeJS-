const nodemailer = require("nodemailer");

let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth:{
        user:'meissambaye09@gmail.com',

        //Avec Gmail, il faut creer un mot de passe d'application. I mean, c'est impossible d'utiliser tonm= mot de passe original
        pass:'pgdk xonl iotk imxm'
    }
})

var message = {
    from: "meissambaye09@gmail.com",
    to: "meissambaye09@gmail.com",
    subject: "Test email-sender",
    text: "Ceci n'est qu'un test du package nodemailer",
};

transporter.sendMail(message,(err,data)=>{
    if(err){
        console.log(err);
    } 
    console.log("Mail sent")
})