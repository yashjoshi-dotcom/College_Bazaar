import { jsx as _jsx } from "react/jsx-runtime";
import classNames from 'classnames';
import { excludeClassName } from '../../helpers/exclude';
import { useTheme } from '../Flowbite/ThemeContext';
export const NavbarLink = ({ active, disabled, href, children, ...props }) => {
    const theme = useTheme().theme.navbar.link;
    const theirProps = excludeClassName(props);
    return (_jsx("li", { children: _jsx("a", { href: href, className: classNames(theme.base, {
                [theme.active.on]: active,
                [theme.active.off]: !active && !disabled,
            }, theme.disabled[disabled ? 'on' : 'off']), ...theirProps, children: children }) }));
};
