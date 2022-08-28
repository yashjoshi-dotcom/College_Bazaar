import { jsx as _jsx } from "react/jsx-runtime";
import classNames from 'classnames';
import { excludeClassName } from '../../helpers/exclude';
import { useTheme } from '../Flowbite/ThemeContext';
import { useNavbarContext } from './NavbarContext';
export const NavbarCollapse = ({ children, ...props }) => {
    const { isOpen } = useNavbarContext();
    const theme = useTheme().theme.navbar.collapse;
    const theirProps = excludeClassName(props);
    return (_jsx("div", { className: classNames(theme.base, theme.hidden[!isOpen ? 'on' : 'off']), "data-testid": "flowbite-navbar-collapse", ...theirProps, children: _jsx("ul", { className: theme.list, children: children }) }));
};
