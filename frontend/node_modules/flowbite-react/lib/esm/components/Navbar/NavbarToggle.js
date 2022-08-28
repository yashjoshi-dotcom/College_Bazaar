import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { GoThreeBars } from 'react-icons/go';
import { excludeClassName } from '../../helpers/exclude';
import { useTheme } from '../Flowbite/ThemeContext';
import { useNavbarContext } from './NavbarContext';
export const NavbarToggle = ({ barIcon: BarIcon = GoThreeBars, ...props }) => {
    const { isOpen, setIsOpen } = useNavbarContext();
    const handleClick = () => {
        setIsOpen(!isOpen);
    };
    const theme = useTheme().theme.navbar.toggle;
    const theirProps = excludeClassName(props);
    return (_jsxs("button", { className: theme.base, "data-testid": "flowbite-navbar-toggle", onClick: handleClick, ...theirProps, children: [_jsx("span", { className: "sr-only", children: "Open main menu" }), _jsx(BarIcon, { className: theme.icon })] }));
};
