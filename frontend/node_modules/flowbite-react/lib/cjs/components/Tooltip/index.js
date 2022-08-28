"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tooltip = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const exclude_1 = require("../../helpers/exclude");
const Floating_1 = require("../Floating");
const ThemeContext_1 = require("../Flowbite/ThemeContext");
/**
 * @see https://floating-ui.com/docs/react-dom-interactions
 */
const Tooltip = ({ animation = 'duration-300', arrow = true, children, content, placement = 'top', style = 'dark', trigger = 'hover', ...props }) => {
    const theme = (0, ThemeContext_1.useTheme)().theme.tooltip;
    const theirProps = (0, exclude_1.excludeClassName)(props);
    return ((0, jsx_runtime_1.jsx)(Floating_1.Floating, { content: content, style: style, animation: animation, placement: placement, arrow: arrow, trigger: trigger, theme: theme, ...theirProps, children: children }));
};
exports.Tooltip = Tooltip;
