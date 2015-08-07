/*sleepTime: millisecond*/
function sleep(sleepTime) {
    for (var start = +new Date; +new Date- start <= sleepTime; ) { }
}

exports.sleep = sleep;