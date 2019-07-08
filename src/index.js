"use strict";
exports.__esModule = true;
var tiny_invariant_1 = require("tiny-invariant");
exports.assertUnreachable = function (_, message) {
    if (message === void 0) { message = 'unreachable'; }
    return tiny_invariant_1["default"](false, message);
};
