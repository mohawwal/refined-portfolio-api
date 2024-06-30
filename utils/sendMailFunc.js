const nodemailer = require("nodemailer")
const path = require("path")
const catchAsyncError = require("../middlewares/catchAsyncError")

require("dotenv").config()

    exports.sendEmailFunc = catchAsyncError(async ({ name, email, subject, message }) => {

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            host: "smtp.gmail.com",
            port: 587,
            secure: false,
            auth: {
                user: process.env.EMAIL_USERNAME,
                pass: process.env.EMAIL_PASSWORD,
            },
            tls: {
                rejectUnauthorized: false, 
            },
        });

        const mailOptions = {
            from: {
                name: name,
                address: process.env.EMAIL_USERNAME,
            },
            replyTo: email,
            to: process.env.EMAIL_USERNAME,
            subject: subject,
            text: "CONTACT FROM YOUR PORTFOLIO",
            html: message, 
            
        }

        transporter.sendMail(mailOptions, function(error, info){
            if (error) {
                console.log(error);
            } else {
                console.log('Email sent: ' + info.response);
            }
        });
    
    })

