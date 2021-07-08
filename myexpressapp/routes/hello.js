var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    // res.send('Hello World!'); // 返回字符串
    //返回一个对象
    let data = {
        name: "Tony",
        age: "20"
    }
    res.json(data)
});

module.exports = router;
