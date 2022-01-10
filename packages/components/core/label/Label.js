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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var LabelStyles_1 = require("./LabelStyles");
var Label = function (props) {
    var children = props.children;
    var ref = react_1.default.useRef(null);
    return (react_1.default.createElement(LabelStyles_1.LabelStyles, __assign({ as: "label", ref: ref }, props), children));
};
exports.default = Label;
