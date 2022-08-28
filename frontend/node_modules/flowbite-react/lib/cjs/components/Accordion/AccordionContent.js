"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccordionContent = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const exclude_1 = require("../../helpers/exclude");
const ThemeContext_1 = require("../Flowbite/ThemeContext");
const AccordionPanelContext_1 = require("./AccordionPanelContext");
const AccordionContent = ({ children, ...props }) => {
    const theirProps = (0, exclude_1.excludeClassName)(props);
    const { isOpen } = (0, AccordionPanelContext_1.useAccordionContext)();
    const theme = (0, ThemeContext_1.useTheme)().theme.accordion.content;
    return ((0, jsx_runtime_1.jsx)("div", { className: theme.base, "data-testid": "flowbite-accordion-content", hidden: !isOpen, ...theirProps, children: children }));
};
exports.AccordionContent = AccordionContent;
