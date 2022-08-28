"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const exclude_1 = require("../../helpers/exclude");
const ThemeContext_1 = require("../Flowbite/ThemeContext");
const ButtonGroup = ({ children, outline, pill, ...props }) => {
    const theirProps = (0, exclude_1.excludeClassName)(props);
    const items = (0, react_1.useMemo)(() => react_1.Children.map(children, (child, index) => (0, react_1.cloneElement)(child, {
        outline,
        pill,
        positionInGroup: index === 0 ? 'start' : index === children.length - 1 ? 'end' : 'middle',
    })), [children, outline, pill]);
    const theme = (0, ThemeContext_1.useTheme)().theme.buttonGroup;
    return ((0, jsx_runtime_1.jsx)("div", { className: theme.base, role: "group", ...theirProps, children: items }));
};
ButtonGroup.displayName = 'Button.Group';
exports.default = ButtonGroup;
