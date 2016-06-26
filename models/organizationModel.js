"use strict";
var organizationModel = function () {
};

organizationModel.prototype.dummyData = [
    {
        "organization_id": "1000001",
        "name": "Sleighdogs",
        "account_created_date": "20160224",
    },
    {
        "organization_id": "1000002",
        "name": "Example",
        "account_created_date": "20160225",
    }];

organizationModel.prototype.findAll = function (callback) {
    callback(null, this.dummyData)
};


module.exports = organizationModel;
