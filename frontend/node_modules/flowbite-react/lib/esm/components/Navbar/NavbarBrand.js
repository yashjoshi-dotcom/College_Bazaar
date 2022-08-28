import { jsx as _jsx } from "react/jsx-runtime";
import { excludeClassName } from '../../helpers/exclude';
import { useTheme } from '../Flowbite/ThemeContext';
export const NavbarBrand = ({ children, href, ...props }) => {
    const theme = useTheme().theme.navbar;
    const theirProps = excludeClassName(props);
    return (_jsx("a", { href: href, className: theme.brand, ...theirProps, children: children }));
};
