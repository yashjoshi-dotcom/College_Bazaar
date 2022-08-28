"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Radio = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const exclude_1 = require("../../helpers/exclude");
const ThemeContext_1 = require("../Flowbite/ThemeContext");
exports.Radio = (0, react_1.forwardRef)((props, ref) => {
    const theme = (0, ThemeContext_1.useTheme)().theme.formControls.radio;
    const theirProps = (0, exclude_1.excludeClassName)(props);
    return (0, jsx_runtime_1.jsx)("input", { ref: ref, className: theme.base, type: "radio", ...theirProps });
});
exports.Radio.displayName = 'Radio';
