"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.toCamel = exports.toSnake = exports.snake = exports.camel = void 0;
exports.camel = function (str) { return str.replace(/_+(.?)/g, function (_, p1) { return p1.toUpperCase(); }); };
exports.snake = function (str) {
    return str
        .replace(/(^[A-Z])/, function (_, p1) { return p1.toLowerCase(); })
        .replace(/([A-Z]+)/g, function (_, p1) { return "_" + p1.toLowerCase(); });
};
var detectObject = function (obj) {
    if (Object.prototype.toString.call(obj) === '[object Object]') {
        return true;
    }
    return false;
};
var propertyNameConverter = function (converterFn) { return function (data) {
    var recursive = function (obj) {
        var keys = data ? Object.keys(obj) : [];
        return keys.reduce(function (accum, curr) {
            var _a;
            var propName = curr;
            var propValue = obj[propName];
            return __assign(__assign({}, accum), (_a = {}, _a[converterFn(propName)] = Array.isArray(propValue)
                ? propValue.map(function (x) { return (detectObject(x) ? recursive(x) : x); })
                : detectObject(propValue)
                    ? recursive(propValue)
                    : propValue, _a));
        }, {});
    };
    return recursive(data);
}; };
exports.toSnake = propertyNameConverter(exports.snake);
exports.toCamel = propertyNameConverter(exports.camel);
