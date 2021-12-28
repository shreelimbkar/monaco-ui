"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var styled_components_1 = __importDefault(require("styled-components"));
var styled_system_1 = require("styled-system");
// import { BoxStyles } from './BoxStyles';
var Box = styled_components_1.default.div({
    boxSizing: 'border-box',
    minWidth: 0,
}, styled_system_1.background, styled_system_1.border, styled_system_1.color, styled_system_1.flexbox, styled_system_1.grid, styled_system_1.layout, styled_system_1.position, styled_system_1.shadow, styled_system_1.space, styled_system_1.typography);
// const Box: React.FC = ({ children }) => {
//   return <BoxStyles>{children}</BoxStyles>;
// };
exports.default = Box;
