
userModel = function () {
};

userModel.prototype.checkLogin = function (user, callback) {

    if (!(user.username === 'karim' && user.password === '123456')) {
        return  callback(null, false);
    }

    var profile = {
        first_name: 'Karim',
        last_name: 'Samir',
        email: 'karsam555@yahoo.com',
        id: 123
    };
    callback(null, profile)
};


module.exports = userModel;
