import { jsx as _jsx } from "react/jsx-runtime";
import { excludeClassName } from '../../helpers/exclude';
import { useTheme } from '../Flowbite/ThemeContext';
const SidebarItems = ({ children, ...props }) => {
    const theirProps = excludeClassName(props);
    const theme = useTheme().theme.sidebar.items;
    return (_jsx("div", { className: theme, "data-testid": "flowbite-sidebar-items", ...theirProps, children: children }));
};
SidebarItems.displayName = 'Sidebar.Items';
export default SidebarItems;
