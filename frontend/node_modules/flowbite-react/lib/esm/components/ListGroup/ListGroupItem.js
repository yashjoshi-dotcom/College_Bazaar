import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import classNames from 'classnames';
import { excludeClassName } from '../../helpers/exclude';
import { useTheme } from '../Flowbite/ThemeContext';
export const ListGroupItem = ({ active: isActive, children, href, icon: Icon, onClick, ...props }) => {
    const isLink = typeof href !== 'undefined';
    const Component = isLink ? 'a' : 'button';
    const theirProps = excludeClassName(props);
    const theme = useTheme().theme.listGroup.item;
    return (_jsx("li", { children: _jsxs(Component, { className: classNames(theme.active[isActive ? 'on' : 'off'], theme.base, theme.href[isLink ? 'on' : 'off']), href: href, onClick: onClick, type: isLink ? undefined : 'button', ...theirProps, children: [Icon && _jsx(Icon, { "aria-hidden": true, className: theme.icon, "data-testid": "flowbite-list-group-item-icon" }), children] }) }));
};
