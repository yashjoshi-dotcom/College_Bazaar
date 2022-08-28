"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NavbarCollapse = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const classnames_1 = __importDefault(require("classnames"));
const exclude_1 = require("../../helpers/exclude");
const ThemeContext_1 = require("../Flowbite/ThemeContext");
const NavbarContext_1 = require("./NavbarContext");
const NavbarCollapse = ({ children, ...props }) => {
    const { isOpen } = (0, NavbarContext_1.useNavbarContext)();
    const theme = (0, ThemeContext_1.useTheme)().theme.navbar.collapse;
    const theirProps = (0, exclude_1.excludeClassName)(props);
    return ((0, jsx_runtime_1.jsx)("div", { className: (0, classnames_1.default)(theme.base, theme.hidden[!isOpen ? 'on' : 'off']), "data-testid": "flowbite-navbar-collapse", ...theirProps, children: (0, jsx_runtime_1.jsx)("ul", { className: theme.list, children: children }) }));
};
exports.NavbarCollapse = NavbarCollapse;
