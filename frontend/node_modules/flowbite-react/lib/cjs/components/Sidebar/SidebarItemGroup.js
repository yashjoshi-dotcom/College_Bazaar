"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const exclude_1 = require("../../helpers/exclude");
const ThemeContext_1 = require("../Flowbite/ThemeContext");
const SidebarItemContext_1 = require("./SidebarItemContext");
const SidebarItemGroup = ({ children, ...props }) => {
    const theirProps = (0, exclude_1.excludeClassName)(props);
    const theme = (0, ThemeContext_1.useTheme)().theme.sidebar.itemGroup;
    return ((0, jsx_runtime_1.jsx)("ul", { className: theme, "data-testid": "flowbite-sidebar-item-group", ...theirProps, children: (0, jsx_runtime_1.jsx)(SidebarItemContext_1.SidebarItemContext.Provider, { value: { isInsideCollapse: false }, children: children }) }));
};
SidebarItemGroup.displayName = 'Sidebar.ItemGroup';
exports.default = SidebarItemGroup;
