import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { HiOutlineChevronRight } from 'react-icons/hi';
import { excludeClassName } from '../../helpers/exclude';
import { useTheme } from '../Flowbite/ThemeContext';
const BreadcrumbItem = ({ children, href, icon: Icon, ...props }) => {
    const isLink = typeof href !== 'undefined';
    const theirProps = excludeClassName(props);
    const theme = useTheme().theme.breadcrumb.item;
    const Component = isLink ? 'a' : 'span';
    return (_jsxs("li", { className: theme.base, ...theirProps, children: [_jsx(HiOutlineChevronRight, { "aria-hidden": true, className: theme.chevron, "data-testid": "flowbite-breadcrumb-separator" }), _jsxs(Component, { className: theme.href[isLink ? 'on' : 'off'], "data-testid": "flowbite-breadcrumb-item", href: href, children: [Icon && _jsx(Icon, { "aria-hidden": true, className: theme.icon }), children] })] }));
};
BreadcrumbItem.displayName = 'Breadcrumb.Item';
export default BreadcrumbItem;
