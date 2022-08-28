"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FooterCopyright = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const ThemeContext_1 = require("../Flowbite/ThemeContext");
const FooterCopyright = ({ href, by, year }) => {
    const theme = (0, ThemeContext_1.useTheme)().theme.footer.copyright;
    return ((0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsxs)("span", { className: theme.base, "data-testid": "flowbite-footer-copyright", children: ["\u00A9 ", year, href ? ((0, jsx_runtime_1.jsx)("a", { href: href, className: theme.href, children: by })) : ((0, jsx_runtime_1.jsx)("span", { "data-testid": "flowbite-footer-copyright-span", className: theme.span, children: by }))] }) }));
};
exports.FooterCopyright = FooterCopyright;
