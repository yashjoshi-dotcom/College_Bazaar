"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NavbarToggle = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const go_1 = require("react-icons/go");
const exclude_1 = require("../../helpers/exclude");
const ThemeContext_1 = require("../Flowbite/ThemeContext");
const NavbarContext_1 = require("./NavbarContext");
const NavbarToggle = ({ barIcon: BarIcon = go_1.GoThreeBars, ...props }) => {
    const { isOpen, setIsOpen } = (0, NavbarContext_1.useNavbarContext)();
    const handleClick = () => {
        setIsOpen(!isOpen);
    };
    const theme = (0, ThemeContext_1.useTheme)().theme.navbar.toggle;
    const theirProps = (0, exclude_1.excludeClassName)(props);
    return ((0, jsx_runtime_1.jsxs)("button", { className: theme.base, "data-testid": "flowbite-navbar-toggle", onClick: handleClick, ...theirProps, children: [(0, jsx_runtime_1.jsx)("span", { className: "sr-only", children: "Open main menu" }), (0, jsx_runtime_1.jsx)(BarIcon, { className: theme.icon })] }));
};
exports.NavbarToggle = NavbarToggle;
