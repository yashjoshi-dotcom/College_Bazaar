"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NavbarBrand = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const exclude_1 = require("../../helpers/exclude");
const ThemeContext_1 = require("../Flowbite/ThemeContext");
const NavbarBrand = ({ children, href, ...props }) => {
    const theme = (0, ThemeContext_1.useTheme)().theme.navbar;
    const theirProps = (0, exclude_1.excludeClassName)(props);
    return ((0, jsx_runtime_1.jsx)("a", { href: href, className: theme.brand, ...theirProps, children: children }));
};
exports.NavbarBrand = NavbarBrand;
