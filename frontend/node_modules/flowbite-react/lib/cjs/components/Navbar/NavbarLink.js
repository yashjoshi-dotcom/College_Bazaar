"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NavbarLink = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const classnames_1 = __importDefault(require("classnames"));
const exclude_1 = require("../../helpers/exclude");
const ThemeContext_1 = require("../Flowbite/ThemeContext");
const NavbarLink = ({ active, disabled, href, children, ...props }) => {
    const theme = (0, ThemeContext_1.useTheme)().theme.navbar.link;
    const theirProps = (0, exclude_1.excludeClassName)(props);
    return ((0, jsx_runtime_1.jsx)("li", { children: (0, jsx_runtime_1.jsx)("a", { href: href, className: (0, classnames_1.default)(theme.base, {
                [theme.active.on]: active,
                [theme.active.off]: !active && !disabled,
            }, theme.disabled[disabled ? 'on' : 'off']), ...theirProps, children: children }) }));
};
exports.NavbarLink = NavbarLink;
