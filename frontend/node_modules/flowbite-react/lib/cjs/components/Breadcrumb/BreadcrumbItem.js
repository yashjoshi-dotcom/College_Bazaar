"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const hi_1 = require("react-icons/hi");
const exclude_1 = require("../../helpers/exclude");
const ThemeContext_1 = require("../Flowbite/ThemeContext");
const BreadcrumbItem = ({ children, href, icon: Icon, ...props }) => {
    const isLink = typeof href !== 'undefined';
    const theirProps = (0, exclude_1.excludeClassName)(props);
    const theme = (0, ThemeContext_1.useTheme)().theme.breadcrumb.item;
    const Component = isLink ? 'a' : 'span';
    return ((0, jsx_runtime_1.jsxs)("li", { className: theme.base, ...theirProps, children: [(0, jsx_runtime_1.jsx)(hi_1.HiOutlineChevronRight, { "aria-hidden": true, className: theme.chevron, "data-testid": "flowbite-breadcrumb-separator" }), (0, jsx_runtime_1.jsxs)(Component, { className: theme.href[isLink ? 'on' : 'off'], "data-testid": "flowbite-breadcrumb-item", href: href, children: [Icon && (0, jsx_runtime_1.jsx)(Icon, { "aria-hidden": true, className: theme.icon }), children] })] }));
};
BreadcrumbItem.displayName = 'Breadcrumb.Item';
exports.default = BreadcrumbItem;
