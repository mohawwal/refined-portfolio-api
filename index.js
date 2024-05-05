const express = require('express');
const app = express();
const cors = require('cors');
const nodemailer = require('nodemailer');

// Use CORS middleware
app.use(cors());

// Parse JSON bodies and URL-encoded bodies
app.use(express.json({ limit: "25mb" }));
app.use(express.urlencoded({ limit: "25mb" }));

// Custom middleware to set Access-Control-Allow-Origin header
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', "*");
    next();
});

function sendEmail({ email, subject, message }) {
    return new Promise((resolve, reject) => {
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'aanileleye@gmail.com',
                pass: 'your_password_here' // Make sure to securely store your password
            },
            tls: {
                rejectUnauthorized: false
            }
        });

        const mailOptions = {
            from: 'aanileleye@gmail.com',
            to: email,
            subject: subject,
            text: message
        };

        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error);
                reject({ message: 'An error occurred' });
            } else {
                resolve({ message: 'Email sent successfully' });
            }
        });
    });
}

app.get("/", async (req, res) => {
    try {
        const response = await sendEmail(req.query);
        res.send(response.message);
    } catch (error) {
        console.error(error);
        res.status(500).send(error.message);
    }
});

// Listen on the port specified by the $PORT environment variable
const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log("nodemailer is listening at port " + port);
});
