import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useId } from 'react';
import { excludeClassName } from '../../helpers/exclude';
import { useTheme } from '../Flowbite/ThemeContext';
import { useSidebarContext } from './SidebarContext';
const SidebarLogo = ({ children, href, img, imgAlt = '', ...props }) => {
    const theirProps = excludeClassName(props);
    const id = useId();
    const { isCollapsed } = useSidebarContext();
    const theme = useTheme().theme.sidebar.logo;
    return (_jsxs("a", { "aria-labelledby": `flowbite-sidebar-logo-${id}`, className: theme.base, href: href, ...theirProps, children: [_jsx("img", { alt: imgAlt, className: theme.img, src: img }), _jsx("span", { className: theme.collapsed[isCollapsed ? 'on' : 'off'], id: `flowbite-sidebar-logo-${id}`, children: children })] }));
};
SidebarLogo.displayName = 'Sidebar.Logo';
export default SidebarLogo;
