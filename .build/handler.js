"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hello = void 0;
var hello = function (event) {
    var response = {
        statusCode: 200,
        body: JSON.stringify({
            message: 'Go Serverless v3.0! Your function executed successfully!',
            input: event,
        }),
    };
    return new Promise(function (resolve) {
        resolve(response);
    });
};
exports.hello = hello;
//# sourceMappingURL=handler.js.map