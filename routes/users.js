var express = require('express');
var router = express.Router();
var jwt = require('../lib/jwtauth');
var user = require('../models/userModel');
var user = new user();

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send('respond with a resource');
});

/**
 * 
 * @param {string} username
 * @param {string} password
 */
router.post('/login', function (req, res, next) {

    var username = req.body.username;
    var password = req.body.password;
    
    user.checkLogin({username: username, password: password}, function(err, userToken){
        
        if(err){
            console.log('err: ', require('util').inspect(err))
        }
        
        if(userToken){
           res.json({token: jwt.createToken(userToken)}); 
        }else{
            res.status(401).send('Wrong user or password');
        }
    })
});

module.exports = router;
