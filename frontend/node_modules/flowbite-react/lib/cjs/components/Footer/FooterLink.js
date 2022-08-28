"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FooterLink = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const ThemeContext_1 = require("../Flowbite/ThemeContext");
const FooterLink = ({ children, href }) => {
    const theme = (0, ThemeContext_1.useTheme)().theme.footer.groupLink.link;
    return ((0, jsx_runtime_1.jsx)("li", { className: theme.base, children: (0, jsx_runtime_1.jsx)("a", { href: href, className: theme.href, children: children }) }));
};
exports.FooterLink = FooterLink;
