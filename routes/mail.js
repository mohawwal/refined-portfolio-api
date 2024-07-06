const express = require('express')
const router = express.Router()

const { sendMailFunc } = require('../controller/contactController')

router.route('/mail').post(sendMailFunc)

module.exports = router