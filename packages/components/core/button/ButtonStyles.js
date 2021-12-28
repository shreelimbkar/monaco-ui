"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ButtonStyles = void 0;
var styled_components_1 = __importStar(require("styled-components"));
var tokens_1 = require("../tokens");
var ButtonStyles = styled_components_1.default.button(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  border: 2px solid ", ";\n  border-radius: 40px;\n  box-sizing: border-box;\n  background-color: ", ";\n  color: ", ";\n  cursor: pointer;\n  display: inline-block;\n  padding: 0.375rem 1.25rem;\n  font-size: ", ";\n  position: relative;\n  text-align: center;\n  text-decoration: none;\n  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;\n  font-weight: ", ";\n  line-height: ", ";\n  transition: 0.2s all;\n  ", "\n  ", "\n  ", "\n    ", "\n"], ["\n  border: 2px solid ", ";\n  border-radius: 40px;\n  box-sizing: border-box;\n  background-color: ", ";\n  color: ", ";\n  cursor: pointer;\n  display: inline-block;\n  padding: 0.375rem 1.25rem;\n  font-size: ", ";\n  position: relative;\n  text-align: center;\n  text-decoration: none;\n  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;\n  font-weight: ", ";\n  line-height: ", ";\n  transition: 0.2s all;\n  ", "\n  ", "\n  ", "\n    ", "\n"])), tokens_1.color.grey, tokens_1.color.grey, tokens_1.color.blue130, tokens_1.fontSize.s4, tokens_1.weight.medium, tokens_1.lineHeight.l, function (props) {
    return props.color === 'primary' && (0, styled_components_1.css)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n      border: 2px solid ", ";\n      background-color: ", ";\n      color: ", ";\n      &:hover {\n        border: 2px solid ", ";\n        background-color: ", ";\n      }\n    "], ["\n      border: 2px solid ", ";\n      background-color: ", ";\n      color: ", ";\n      &:hover {\n        border: 2px solid ", ";\n        background-color: ", ";\n      }\n    "])), tokens_1.brand.blue, tokens_1.brand.blue, tokens_1.brand.white, tokens_1.color['blue80'], tokens_1.color['blue80']);
}, function (props) {
    return props.color === 'secondary' && (0, styled_components_1.css)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n      background-color: transparent;\n      color: ", ";\n      border: 2px solid ", ";\n      &:hover {\n        color: ", ";\n        background-color: ", ";\n      }\n    "], ["\n      background-color: transparent;\n      color: ", ";\n      border: 2px solid ", ";\n      &:hover {\n        color: ", ";\n        background-color: ", ";\n      }\n    "])), tokens_1.brand.blue, tokens_1.brand.blue, tokens_1.brand.blue, tokens_1.color['blue10']);
}, function (props) {
    return props.variant === 'text' && (0, styled_components_1.css)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n      background-color: transparent;\n      color: ", ";\n      border: unset;\n      &:hover {\n        border: unset;\n        color: ", ";\n        background-color: ", ";\n      }\n    "], ["\n      background-color: transparent;\n      color: ", ";\n      border: unset;\n      &:hover {\n        border: unset;\n        color: ", ";\n        background-color: ", ";\n      }\n    "])), tokens_1.brand.blue, tokens_1.brand.blue, tokens_1.color['blue10']);
}, function (props) {
    return props.disabled && (0, styled_components_1.css)(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n      background-color: ", ";\n      border: 2px solid ", ";\n      color: ", ";\n      cursor: not-allowed;\n      &:hover {\n        background-color: ", ";\n        border: 2px solid ", ";\n        color: ", ";\n      }\n    "], ["\n      background-color: ", ";\n      border: 2px solid ", ";\n      color: ", ";\n      cursor: not-allowed;\n      &:hover {\n        background-color: ", ";\n        border: 2px solid ", ";\n        color: ", ";\n      }\n    "])), tokens_1.color['darkBlue-10'], tokens_1.color['darkBlue-10'], tokens_1.color['darkBlue-50'], tokens_1.color['darkBlue-10'], tokens_1.color['darkBlue-10'], tokens_1.color['darkBlue-50']);
});
exports.ButtonStyles = ButtonStyles;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;
