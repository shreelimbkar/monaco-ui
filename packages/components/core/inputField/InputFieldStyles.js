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
exports.InputFieldStyles = void 0;
var styled_components_1 = __importStar(require("styled-components"));
var tokens_1 = require("../tokens");
var styled_system_1 = require("styled-system");
var InputFieldStyles = styled_components_1.default.input(styled_system_1.background, styled_system_1.border, styled_system_1.color, styled_system_1.flexbox, styled_system_1.grid, styled_system_1.layout, styled_system_1.position, styled_system_1.shadow, styled_system_1.space, styled_system_1.typography, (0, styled_components_1.css)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    box-sizing: border-box;\n    position: relative;\n    padding: ", ";\n    font-size: ", ";\n    line-height: ", ";\n    background-color: ", ";\n    color: ", ";\n    border-radius: 2px;\n    border: 1px solid ", ";\n    display: inline-block;\n    transition: all 0.3s;\n    &:hover {\n      border: 1px solid ", ";\n      box-shadow: 0 0 0 1px ", ";\n    }\n    &:focus {\n      border: 1px solid ", ";\n    }\n  "], ["\n    box-sizing: border-box;\n    position: relative;\n    padding: ", ";\n    font-size: ", ";\n    line-height: ", ";\n    background-color: ", ";\n    color: ", ";\n    border-radius: 2px;\n    border: 1px solid ", ";\n    display: inline-block;\n    transition: all 0.3s;\n    &:hover {\n      border: 1px solid ", ";\n      box-shadow: 0 0 0 1px ", ";\n    }\n    &:focus {\n      border: 1px solid ", ";\n    }\n  "])), tokens_1.spacing.s, tokens_1.fontSize.s2, tokens_1.lineHeight.xs, tokens_1.brand.white, tokens_1.brand.darkBlue, tokens_1.color['darkBlue-20'], tokens_1.color['darkBlue-80'], tokens_1.color.grey10, tokens_1.color['darkBlue-80']));
exports.InputFieldStyles = InputFieldStyles;
var templateObject_1;
