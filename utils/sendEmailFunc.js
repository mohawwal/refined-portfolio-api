const nodemailer = require('nodemailer');
const catchAsyncError = require('../middlewares/catchAsyncError')

exports.sendEmailFunc = catchAsyncError(async({ email, subject, message }) => {
    return new Promise((resolve, reject) => {
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USERNAME,
                pass: process.env.EMAIL_PASSWORD 
            },
            tls: {
                rejectUnauthorized: false
            }
        });

        const mailOptions = {
            from: process.env.EMAIL_USERNAME,
            to: email,
            subject: subject,
            text: message
        };

        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error);
                reject({ message: 'An error occurred' });
            } else {
                console.log('Email sent:', info.response);
                resolve({ message: 'Email sent successfully' });
            }
        });
    });
}
)