const express = require('express');
const app = express();
const cors = require('cors')
const nodemailer = require('nodemailer')
const port = 3001

app.use(cors())
app.use(express.json({limit: "25mb"}))
app.use(express.urlencoded({limit: "25mb"}))


app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', "*");
    next()
})


function sendEmail({email, subject, message}) {
    return new Promise((resolve, reject) => {
        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'aanileleye@gmail.com',
                pass: 'uvur ujvo xplx lbyh'
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

        transporter.sendMail(mailOptions, function(error, info){
            if (error) {
                console.log(error);
                reject({message: 'An error occurred'});
            } else {
                resolve({message: 'Email sent successfully'});
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


app.listen(port, () => {
    console.log("nodemailer is listening at port "+port)
})