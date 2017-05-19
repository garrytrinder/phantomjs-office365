var q = require('q');
var auth = require('../auth');
var options = require('./options');

function openPage(page, address) {
    console.log('openPage');
    var Q = q.defer();
    page.open(address, function (status) {
        if (status !== 'success') {
            Q.reject('Unable to load the address!');
        }
        Q.resolve(page);
    });
    return Q.promise;
}

function loginToOffice365(page) {
    var Q = q.defer();

    var evaluated = page.evaluate(function (auth) {
        document.getElementById("cred_userid_inputtext").value = auth.username;
        document.getElementById("cred_password_inputtext").value = auth.password;
        document.getElementById("cred_sign_in_button");
        document.getElementById("credentials").submit();
        return true;
    }, auth);

    window.setTimeout(function () {
        Q.resolve(page);
    }, 5000);

    return Q.promise;
}

function setOptions(page) {
    var Q = q.defer();

    page.viewportSize = options.viewportSize;
    page.paperSize = options.paperSize;

    window.setTimeout(function () {
        Q.resolve(page);
    }, 100);

    return Q.promise;
}

module.exports = {
    openPage: openPage,
    loginToOffice365: loginToOffice365,
    setOptions: setOptions
}