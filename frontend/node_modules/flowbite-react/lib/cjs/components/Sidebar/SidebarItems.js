"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const exclude_1 = require("../../helpers/exclude");
const ThemeContext_1 = require("../Flowbite/ThemeContext");
const SidebarItems = ({ children, ...props }) => {
    const theirProps = (0, exclude_1.excludeClassName)(props);
    const theme = (0, ThemeContext_1.useTheme)().theme.sidebar.items;
    return ((0, jsx_runtime_1.jsx)("div", { className: theme, "data-testid": "flowbite-sidebar-items", ...theirProps, children: children }));
};
SidebarItems.displayName = 'Sidebar.Items';
exports.default = SidebarItems;
