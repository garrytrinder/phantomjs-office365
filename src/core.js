var auth = require('../auth');
var options = require('./options');

function openPage(page, address) {
    return new Promise(function (resolve, reject) {
        page.open(address, function (status) {
            if (status !== 'success') {
                reject('Unable to load the address!');
            }
            resolve(page);
        });
    });
}

function loginToOffice365(page) {
    return new Promise(function (resolve, reject) {
        page.evaluate(function (auth) {
            document.getElementById("cred_userid_inputtext").value = auth.username;
            document.getElementById("cred_password_inputtext").value = auth.password;
            document.getElementById("cred_sign_in_button");
            document.getElementById("credentials").submit();
            return true;
        }, auth);

        window.setTimeout(function () {
            resolve(page);
        }, 5000);
    });
}

function setOptions(page) {
    return new Promise(function (resolve, reject) {
        page.viewportSize = options.viewportSize;
        page.paperSize = options.paperSize;

        window.setTimeout(function () {
            resolve(page);
        }, 100);
    });
}

module.exports = {
    openPage: openPage,
    loginToOffice365: loginToOffice365,
    setOptions: setOptions
}