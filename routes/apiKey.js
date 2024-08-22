const express = require('express')
const router = express.Router()

const { sendApiKeyFunc } = require('../controller/passApiKey')

router.route('/apiKey').get(sendApiKeyFunc)

module.exports = router