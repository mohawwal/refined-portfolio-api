const { EmailSender } = require('../utils/nodeMailer')


exports.sendMailFunc = async(req, res) => {
    try {
        const { name, email, subject, message } = req.body

        await EmailSender({ name, email, subject, message })

        res.status(200).json({
            success: true,
            delivered: true,
            message: `MESSAGE DELIVERED`
        })
    } catch(error) {
        console.error(error);

        res.status(404).json({
            success: false,
            delivered: false,
            message: 'error while sending the email.'
        })
    }
}