"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pagination = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const classnames_1 = __importDefault(require("classnames"));
const hi_1 = require("react-icons/hi");
const exclude_1 = require("../../helpers/exclude");
const range_1 = __importDefault(require("../../helpers/range"));
const ThemeContext_1 = require("../Flowbite/ThemeContext");
const Pagination = ({ currentPage, layout = 'pagination', onPageChange, showIcons: showIcon = false, totalPages, ...props }) => {
    const firstPage = Math.max(1, currentPage - 3);
    const lastPage = Math.min(currentPage + 3, totalPages);
    const theme = (0, ThemeContext_1.useTheme)().theme.pagination;
    const theirProps = (0, exclude_1.excludeClassName)(props);
    const goToNextPage = () => {
        onPageChange(Math.min(currentPage + 1, totalPages));
    };
    const goToPreviousPage = () => {
        onPageChange(Math.max(currentPage - 1, 1));
    };
    return ((0, jsx_runtime_1.jsxs)("nav", { className: theme.base, ...theirProps, children: [layout === 'table' && ((0, jsx_runtime_1.jsxs)("div", { className: theme.layout.table.base, children: ["Showing ", (0, jsx_runtime_1.jsx)("span", { className: theme.layout.table.span, children: firstPage }), " to\u00A0", (0, jsx_runtime_1.jsx)("span", { className: theme.layout.table.span, children: lastPage }), " of\u00A0", (0, jsx_runtime_1.jsx)("span", { className: theme.layout.table.span, children: totalPages }), " Entries"] })), (0, jsx_runtime_1.jsxs)("ul", { className: theme.pages.base, children: [(0, jsx_runtime_1.jsx)("li", { children: (0, jsx_runtime_1.jsxs)("button", { className: (0, classnames_1.default)(theme.pages.previous.base, showIcon && theme.pages.showIcon), onClick: () => goToPreviousPage(), children: [showIcon && (0, jsx_runtime_1.jsx)(hi_1.HiChevronLeft, { "aria-hidden": true, className: theme.pages.previous.icon }), "Previous"] }) }), layout === 'pagination' &&
                        (0, range_1.default)(firstPage, lastPage).map((page) => ((0, jsx_runtime_1.jsx)("li", { "aria-current": page === currentPage ? 'page' : undefined, children: (0, jsx_runtime_1.jsx)("button", { className: (0, classnames_1.default)(theme.pages.selector.base, {
                                    [theme.pages.selector.active]: currentPage === page,
                                }), onClick: () => onPageChange(page), children: page }) }, page))), (0, jsx_runtime_1.jsx)("li", { children: (0, jsx_runtime_1.jsxs)("button", { className: (0, classnames_1.default)(theme.pages.next.base, showIcon && theme.pages.showIcon), onClick: () => goToNextPage(), children: ["Next", showIcon && (0, jsx_runtime_1.jsx)(hi_1.HiChevronRight, { "aria-hidden": true, className: theme.pages.showIcon })] }) })] })] }));
};
exports.Pagination = Pagination;
