var os = require('os')
var cpu = require('cpu')

module.exports.cpu = function (req, res) {
    res.json(os.cpus()[0])
}

module.exports.cpuload = function (req, res) {

    var load = []
    cpu.usage(function (arr) {
        for (var i in arr) {
            load.push({
                core: i,
                load: arr[i]
            })
        }
        res.json({
            load: load
        })
    })
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