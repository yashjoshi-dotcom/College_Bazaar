"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FooterTitle = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const ThemeContext_1 = require("../Flowbite/ThemeContext");
const FooterTitle = ({ title }) => {
    const theme = (0, ThemeContext_1.useTheme)().theme.footer.title;
    return ((0, jsx_runtime_1.jsx)("h2", { "data-testid": "flowbite-footer-title", className: theme.base, children: title }));
};
exports.FooterTitle = FooterTitle;
