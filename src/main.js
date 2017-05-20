var promise = require('es6-promise').polyfill();
var webpage = require('webpage');
var system = require('system');
var core = require('./core');
var handlers = require('./handlers');

var page = webpage.create();

var address = system.args[1];
var output = system.args[2];

page.onError = handlers.onError;
page.onUrlChanged = handlers.onUrlChanged;

core.openPage(page, address)
    .then(core.loginToOffice365)
    .then(core.setOptions)
    .then(function (page) {
        window.setTimeout(function () {
            page.render(output);
            phantom.exit();
        }, 200);
    })
    .catch(function () {
        console.log(err);
        phantom.exit();
    });