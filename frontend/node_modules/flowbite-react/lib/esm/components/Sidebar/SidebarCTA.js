import { jsx as _jsx } from "react/jsx-runtime";
import classNames from 'classnames';
import { excludeClassName } from '../../helpers/exclude';
import { useTheme } from '../Flowbite/ThemeContext';
import { useSidebarContext } from './SidebarContext';
const SidebarCTA = ({ children, color = 'info', ...props }) => {
    const theirProps = excludeClassName(props);
    const { isCollapsed } = useSidebarContext();
    const theme = useTheme().theme.sidebar.cta;
    return (_jsx("div", { className: classNames(theme.base, theme.color[color]), "data-testid": "sidebar-cta", hidden: isCollapsed, ...theirProps, children: children }));
};
SidebarCTA.displayName = 'Sidebar.CTA';
export default SidebarCTA;
