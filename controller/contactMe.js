const catchAsyncError = require('../middlewares/catchAsyncError');
const { sendEmailFunc } = require('../utils/sendMailFunc')

exports.sendMail = catchAsyncError(async (req, res) => {

    await sendEmailFunc()

    res.status(200).json({
        success: true,
        delivered: "Mail sent",
    })
     
});
