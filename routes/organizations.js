var express = require('express');
var router = express.Router();
var organization = require('../models/organizationModel');
var organization = new organization();


router.get('/', function (req, res, next) {
    
    organization.findAll(function (err, organizations) {
        if(err){
            console.log('err: ', require('util').inspect(err));
        }
        
        res.json(organizations)
    })
});

module.exports = router;
