function onError(msg, trace) {
    var msgStack = ['ERROR: ' + msg];
    if (trace && trace.length) {
        msgStack.push('TRACE:');
        trace.forEach(function (t) {
            msgStack.push(' -> ' + t.file + ': ' + t.line + (t.function ? ' (in function "' + t.function+'")' : ''));
        });
    }

    console.error(msgStack.join('\n'));
};

function onUrlChanged(targetUrl) {
    console.log('New URL: ' + targetUrl);
};

module.exports = {
    onError: onError,
    onUrlChanged: onUrlChanged
}