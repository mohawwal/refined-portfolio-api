const express = require('express');
const router = express.Router();

const { sendMail } = require('../controller/contactMe')
router.get('/mail', sendMail);

module.exports = router;
