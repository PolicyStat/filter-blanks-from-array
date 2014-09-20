module.exports = function (array) {

    var forEach = require("foreach"),
    filtered = [];

    forEach(array, function (item) {
        if (typeof item === "undefined") {
            return;
        }
        filtered.push(item);
    });

    return filtered;

};
