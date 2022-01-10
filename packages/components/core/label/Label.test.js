"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_2 = require("@testing-library/react");
var _1 = __importDefault(require("."));
afterEach(react_2.cleanup);
describe('Label Component', function () {
    test('Renders Correctly', function () {
        var asFragment = (0, react_2.render)(react_1.default.createElement(_1.default, null)).asFragment;
        expect(asFragment()).toMatchSnapshot();
    });
});
