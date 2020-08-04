module.exports = async function healthCheck (req, res) {
    // await req.client.authenticate();
    return res.status(200).send('OK');
}