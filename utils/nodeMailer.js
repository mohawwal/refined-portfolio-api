const nodemailer = require("nodemailer");
const dotenv = require("dotenv");

dotenv.config();

const Email = (options) => {
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

	transporter.sendMail(options, (err, info) => {
		if (err) {
			console.log(err);
			return;
		}
	});
};

//send sendMail
const EmailSender = ({ name, email, subject, message }) => {
    const options = {
        from: `Portfolio Contact 👻`,
        to: process.env.EMAIL_USERNAME,
        replyTo: email,
        subject: subject,
        html: `
            <div>
                <h4>You Got A message from ${name}</h4>
                <p>${message}</p>
                <br />
                <p>reply ${email}</p>
            </div>
        `
    }

    Email(options)
};

module.exports = {EmailSender}
