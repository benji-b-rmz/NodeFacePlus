var express = require('express');
var router = express.Router();
var unirest = require('unirest');
var mashape_key = "MASHAPE_KEY_HERE";

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'FlaskFacePlus' });
});

router.post('/api/faceplus', function(req, res){

    //send curl request using the mashape api key and input url from req
    unirest.get("https://faceplusplus-faceplusplus.p.mashape.com/detection/detect?attribute=glass%2Cpose%2Cgender%2Cage%2Crace%2Csmiling&url" + req.body)
        .header("X-Mashape-Key", mashape_key)
        .header("Accept", "text/plain")
        .end(function (result) {
            console.log(result.status, result.headers, result.body);
            res.send(result.body);
        });

});

module.exports = router;
