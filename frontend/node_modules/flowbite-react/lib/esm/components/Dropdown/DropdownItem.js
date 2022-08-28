import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useTheme } from '../Flowbite/ThemeContext';
export const DropdownItem = ({ children, onClick, icon: Icon }) => {
    const theme = useTheme().theme.dropdown.floating.item;
    return (_jsxs("li", { className: theme.base, onClick: onClick, children: [Icon && _jsx(Icon, { className: theme.icon }), children] }));
};
