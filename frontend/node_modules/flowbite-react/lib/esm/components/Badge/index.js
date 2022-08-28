import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import classNames from 'classnames';
import { excludeClassName } from '../../helpers/exclude';
import { useTheme } from '../Flowbite/ThemeContext';
export const Badge = ({ children, color = 'info', href, icon: Icon, size = 'xs', ...props }) => {
    const theirProps = excludeClassName(props);
    const theme = useTheme().theme.badge;
    const Content = () => (_jsxs("span", { className: classNames(theme.base, theme.color[color], theme.icon[Icon ? 'on' : 'off'], theme.size[size]), "data-testid": "flowbite-badge", ...theirProps, children: [Icon && _jsx(Icon, { "aria-hidden": true, className: theme.icon.size[size], "data-testid": "flowbite-badge-icon" }), children && _jsx("span", { children: children })] }));
    return href ? (_jsx("a", { className: theme.href, href: href, children: _jsx(Content, {}) })) : (_jsx(Content, {}));
};
