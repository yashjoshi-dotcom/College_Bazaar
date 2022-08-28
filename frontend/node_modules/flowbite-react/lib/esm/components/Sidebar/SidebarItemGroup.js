import { jsx as _jsx } from "react/jsx-runtime";
import { excludeClassName } from '../../helpers/exclude';
import { useTheme } from '../Flowbite/ThemeContext';
import { SidebarItemContext } from './SidebarItemContext';
const SidebarItemGroup = ({ children, ...props }) => {
    const theirProps = excludeClassName(props);
    const theme = useTheme().theme.sidebar.itemGroup;
    return (_jsx("ul", { className: theme, "data-testid": "flowbite-sidebar-item-group", ...theirProps, children: _jsx(SidebarItemContext.Provider, { value: { isInsideCollapse: false }, children: children }) }));
};
SidebarItemGroup.displayName = 'Sidebar.ItemGroup';
export default SidebarItemGroup;
