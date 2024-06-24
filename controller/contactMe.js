const catchAsyncError = require('../middlewares/catchAsyncError');
const { sendEmailFunc } = require('../utils/sendEmailFunc');

exports.sendMail = catchAsyncError(async (req, res) => {
    const response = await sendEmailFunc(req.query)
    
    if(!response) {
       return res.status(500).json({
        success: false,
        delivered: "Main not sent",
        message: "No mail inputted"
       })
    } 

    setTimeout(() => {
        res.status(200).json({
            success: true,
            delivered: "Mail sent",
            message: response.message
        })
    }, 1000)

});
