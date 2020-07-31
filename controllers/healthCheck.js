module.exports = async function healthCheck (req, res) {
    // check db connection
    return res.status(200).send('OK');
}