"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FooterDivider = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const ThemeContext_1 = require("../Flowbite/ThemeContext");
const FooterDivider = () => {
    const theme = (0, ThemeContext_1.useTheme)().theme.footer.divider;
    return (0, jsx_runtime_1.jsx)("hr", { "data-testid": "footer-divider", className: theme.base });
};
exports.FooterDivider = FooterDivider;
