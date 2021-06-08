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
exports.ButtonStyles = styled_components_1.default.button(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  background: black;\n  color: white;\n  border-radius: 7px;\n  padding: 20px;\n  margin: 10px;\n  font-size: 16px;\n  :disabled {\n    opacity: 0.4;\n  }\n  :hover {\n    box-shadow: 0 0 10px yellow;\n  }\n  ", "\n  border-radius: ", "\n"], ["\n  background: black;\n  color: white;\n  border-radius: 7px;\n  padding: 20px;\n  margin: 10px;\n  font-size: 16px;\n  :disabled {\n    opacity: 0.4;\n  }\n  :hover {\n    box-shadow: 0 0 10px yellow;\n  }\n  ",
    "\n  border-radius: ", "\n"])), function (props) {
    return props.primary && styled_components_1.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n      background: green;\n      color: white;\n    "], ["\n      background: green;\n      color: white;\n    "])));
}, function (props) { return (props.round ? "50%" : "7px"); });
var templateObject_1, templateObject_2;
//# sourceMappingURL=ButtonStyle.js.map