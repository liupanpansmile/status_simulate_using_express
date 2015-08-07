var express = require('express');
var router = express.Router();

var utils = require('./utils');
var url = require("url");

function dealSleep(req) {
    var arg = url.parse(req.url, true).query;
    var sleepTime = 0;
    if (Object.keys(arg).length != 0) {
        if (arg.sleep != undefined)
            sleepTime = arg.sleep;
    }
    if (sleepTime != 0) {
        utils.sleep(sleepTime);
    }
    
}

//  index page
router.get('/', function (req, res) {
    dealSleep(req);
    var instruction = "<li> status code test: http://localost:3000/status/code eg:http://localost:3000/status/200 </li>"
    instruction += "<li>frame test : http://localost:3000/frame </li>";
    instruction += "<li>frame 404 test : http://localost:3000/frame404 </li>";
    instruction += "<li>ajax test : http://localost:3000/ajax </li>";
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(instruction);   
    //res.render('index', { title: 'Express',instruction:instruction });
});

//模拟页面中含有frame
router.get('/frame', function (req, res) {
    dealSleep(req);
    res.render('frame', { title: 'frame Test' });
});


//模拟frame中含有404错误
router.get('/frame404', function (req, res) {
    dealSleep(req);
    res.render('frame404', { title: 'frame404 Test' });
});

//模拟页面中请求静态资源
router.get('/staticResource', function (req, res) {
    dealSleep(req);
    res.render('login', { title: 'static resource ' }); 
});

//模拟页面中ajax请求
router.get('/ajax', function (req, res) {
    dealSleep(req);
    res.render('ajax', { title: 'static resource ' });
    
});

module.exports = router;