
exports.sendApiKeyFunc = async(req, res) => {
    try {
        res.status(200).json({
            apiSiteKey: process.env.REACT_APP_SITE_KEY,
            apiSecretKey: process.env.REACT_APP_SITE_SECRET
        })
    } catch(error) {
        console.error(error);

        res.status(404).json({
            message: 'Error in sending apiKey details'
        })
    }
}