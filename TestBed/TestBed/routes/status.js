var express = require('express');
var router = express.Router();
var url = require("url");
var utils = require('./utils');


/* get status code  */
router.get('/', function (req, res) {
    var arg = url.parse(req.url, true).query;
   
    var sleepTime = 0;
    var statusCode = 200;
    if (Object.keys(arg).length != 0) {
        if (arg.code != undefined)
            statusCode = arg.code;
        if (arg.sleep != undefined)
            sleepTime = arg.sleep;
    }
    if (sleepTime != 0) { 
        utils.sleep(sleepTime);
    }
    res.writeHead(statusCode, { 'Content-Type': 'text/html' });
    res.end('<h1>Return Status Code:' + statusCode + '</h1>\n');
});

module.exports = router;