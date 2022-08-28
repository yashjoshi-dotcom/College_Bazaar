"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FooterIcon = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const ThemeContext_1 = require("../Flowbite/ThemeContext");
const FooterIcon = ({ href, ariaLabel, icon: Icon }) => {
    const theme = (0, ThemeContext_1.useTheme)().theme.footer.icon;
    return ((0, jsx_runtime_1.jsx)("div", { children: href ? ((0, jsx_runtime_1.jsx)("a", { "aria-label": ariaLabel, "data-testid": "flowbite-footer-icon", href: href, className: theme.base, children: (0, jsx_runtime_1.jsx)(Icon, { className: theme.size }) })) : ((0, jsx_runtime_1.jsx)(Icon, { "data-testid": "flowbite-footer-icon", className: theme.size })) }));
};
exports.FooterIcon = FooterIcon;
