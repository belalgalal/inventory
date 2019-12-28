var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.json());
var userService = require('./userService');

router.get('/', function (req, res) {
    userService.getUsers(function(err,rows){
        if(err) {
            res.status(400).json(err);
        }
        else {
            res.json(rows);
        }
    });
});

router.post('/authenticate', function (req, res) {
    userService.authenticateUser(req.body,function(err,row){
        if(err)
        {
            res.status(400).json(err);
        }
        else {
            res.json(row);
        }
    });
});

module.exports = router;