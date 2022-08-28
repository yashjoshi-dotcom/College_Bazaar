import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import classNames from 'classnames';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import { excludeClassName } from '../../helpers/exclude';
import range from '../../helpers/range';
import { useTheme } from '../Flowbite/ThemeContext';
export const Pagination = ({ currentPage, layout = 'pagination', onPageChange, showIcons: showIcon = false, totalPages, ...props }) => {
    const firstPage = Math.max(1, currentPage - 3);
    const lastPage = Math.min(currentPage + 3, totalPages);
    const theme = useTheme().theme.pagination;
    const theirProps = excludeClassName(props);
    const goToNextPage = () => {
        onPageChange(Math.min(currentPage + 1, totalPages));
    };
    const goToPreviousPage = () => {
        onPageChange(Math.max(currentPage - 1, 1));
    };
    return (_jsxs("nav", { className: theme.base, ...theirProps, children: [layout === 'table' && (_jsxs("div", { className: theme.layout.table.base, children: ["Showing ", _jsx("span", { className: theme.layout.table.span, children: firstPage }), " to\u00A0", _jsx("span", { className: theme.layout.table.span, children: lastPage }), " of\u00A0", _jsx("span", { className: theme.layout.table.span, children: totalPages }), " Entries"] })), _jsxs("ul", { className: theme.pages.base, children: [_jsx("li", { children: _jsxs("button", { className: classNames(theme.pages.previous.base, showIcon && theme.pages.showIcon), onClick: () => goToPreviousPage(), children: [showIcon && _jsx(HiChevronLeft, { "aria-hidden": true, className: theme.pages.previous.icon }), "Previous"] }) }), layout === 'pagination' &&
                        range(firstPage, lastPage).map((page) => (_jsx("li", { "aria-current": page === currentPage ? 'page' : undefined, children: _jsx("button", { className: classNames(theme.pages.selector.base, {
                                    [theme.pages.selector.active]: currentPage === page,
                                }), onClick: () => onPageChange(page), children: page }) }, page))), _jsx("li", { children: _jsxs("button", { className: classNames(theme.pages.next.base, showIcon && theme.pages.showIcon), onClick: () => goToNextPage(), children: ["Next", showIcon && _jsx(HiChevronRight, { "aria-hidden": true, className: theme.pages.showIcon })] }) })] })] }));
};
