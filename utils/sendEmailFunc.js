const nodemailer = require('nodemailer');

exports.sendEmailFunc = async ({ email, subject, message }) => {
    try {
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
            to: process.env.EMAIL_USERNAME,
            replyTo: email,
            subject: subject,
            text: message
        };

        await transporter.sendMail(mailOptions);

        return { message: 'Email sent successfully' };
    } catch (error) {
        console.error(error);
        throw new Error('An error occurred while sending the email.');
    }
};
