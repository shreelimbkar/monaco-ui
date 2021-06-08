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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RRSButton = void 0;
var react_1 = __importDefault(require("react"));
// import styled, { AnyStyledComponent, css } from "styled-components";
var ButtonStyle_1 = require("./ButtonStyle");
// interface IHeadingStyled {
//   primary?: boolean;
//   round?: boolean;
// }
var RRSButton = function (_a) {
    var onClick = _a.onClick, children = _a.children, props = __rest(_a, ["onClick", "children"]);
    return (react_1.default.createElement(ButtonStyle_1.ButtonStyles, __assign({}, props, { onClick: onClick }), children));
};
exports.RRSButton = RRSButton;
//# sourceMappingURL=Button.js.map