const nodemailer = require("nodemailer");

// create the transporter object using gmail SMTP

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: "maddelavenkatagopichand@gmail.com",
        pass: "wmuw kium cmfu tsym"
    }
});

// set up eamil data

const mailOptions = {
    from:  "maddelavenkatagopichand@gmail.com", //sender address
    to: "maddelavenkatagopichand@gmail.com", //reciver address
    subject: "Hello from gmail", //subject line
    text: "Hello world",
    html: "<b>helloooooooooooooooooooooooooooooooooooooooooooooo</b>"
}


//send mail

transporter.sendMail(mailOptions, (error, info) => {
    if(error){
        return console.log("error occured", error)
    }
    console.log("Message is sent", info.messageId)
})