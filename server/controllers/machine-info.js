var os = require('os')

module.exports.cpu = function (req, res) {
    res.json(os.cpus()[0])
}

module.exports.ram = function (req, res) {
    var totalmem = os.totalmem(),
        ram = Math.round(totalmem / 1073741824);

    res.json({
        ram: ram,
        totalmem: totalmem,
        freemem: os.freemem()
    });
}

module.exports.opsys = function (req, res) {
    var osName = require('os-name');

    res.json({
        os: osName(os.platform(), os.release())
    })
}
