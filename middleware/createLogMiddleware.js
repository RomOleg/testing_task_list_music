const { Logs } = require("../models/logs")

module.exports = async function  (req, res, next) {
    
    const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    if (ip.substr(0, 7) == "::ffff:") {
      ip = ip.substr(7)
    }

    const logs = await Logs.create({
        api: `${req.method} ${req.originalUrl}`,
        domain: `${ip}`,
        error: '',
    })
    console.log('----111--------------111--------------', req.body, req.params, req.query, req.method, ip);
    next();
}