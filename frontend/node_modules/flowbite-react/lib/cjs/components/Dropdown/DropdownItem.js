"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DropdownItem = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const ThemeContext_1 = require("../Flowbite/ThemeContext");
const DropdownItem = ({ children, onClick, icon: Icon }) => {
    const theme = (0, ThemeContext_1.useTheme)().theme.dropdown.floating.item;
    return ((0, jsx_runtime_1.jsxs)("li", { className: theme.base, onClick: onClick, children: [Icon && (0, jsx_runtime_1.jsx)(Icon, { className: theme.icon }), children] }));
};
exports.DropdownItem = DropdownItem;
