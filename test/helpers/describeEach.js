function describeEach(description, cases, callback) {
    cases.forEach(function (value) {
        describe(description.replace(/\{value\}/gi, String(value)), function () {
            callback(value);
        });
    });
}
window.describeEach = describeEach;
