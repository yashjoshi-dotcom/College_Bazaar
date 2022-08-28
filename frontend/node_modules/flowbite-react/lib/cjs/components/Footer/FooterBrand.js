"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FooterBrand = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const ThemeContext_1 = require("../Flowbite/ThemeContext");
const FooterBrand = ({ alt, children, href, name, src }) => {
    const theme = (0, ThemeContext_1.useTheme)().theme.footer.brand;
    return ((0, jsx_runtime_1.jsx)("div", { children: href ? ((0, jsx_runtime_1.jsxs)("a", { "data-testid": "flowbite-footer-brand", href: href, className: theme.base, children: [(0, jsx_runtime_1.jsx)("img", { alt: alt, src: src, className: theme.img }), (0, jsx_runtime_1.jsx)("span", { "data-testid": "flowbite-footer-brand-span", className: theme.span, children: name }), children] })) : ((0, jsx_runtime_1.jsx)("img", { alt: alt, "data-testid": "flowbite-footer-brand", src: src, className: theme.img })) }));
};
exports.FooterBrand = FooterBrand;
