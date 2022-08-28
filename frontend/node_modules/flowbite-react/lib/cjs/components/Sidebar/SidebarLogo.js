"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const exclude_1 = require("../../helpers/exclude");
const ThemeContext_1 = require("../Flowbite/ThemeContext");
const SidebarContext_1 = require("./SidebarContext");
const SidebarLogo = ({ children, href, img, imgAlt = '', ...props }) => {
    const theirProps = (0, exclude_1.excludeClassName)(props);
    const id = (0, react_1.useId)();
    const { isCollapsed } = (0, SidebarContext_1.useSidebarContext)();
    const theme = (0, ThemeContext_1.useTheme)().theme.sidebar.logo;
    return ((0, jsx_runtime_1.jsxs)("a", { "aria-labelledby": `flowbite-sidebar-logo-${id}`, className: theme.base, href: href, ...theirProps, children: [(0, jsx_runtime_1.jsx)("img", { alt: imgAlt, className: theme.img, src: img }), (0, jsx_runtime_1.jsx)("span", { className: theme.collapsed[isCollapsed ? 'on' : 'off'], id: `flowbite-sidebar-logo-${id}`, children: children })] }));
};
SidebarLogo.displayName = 'Sidebar.Logo';
exports.default = SidebarLogo;
