import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { excludeClassName } from '../../helpers/exclude';
import { useTheme } from '../Flowbite/ThemeContext';
import { DropdownDivider } from './DropdownDivider';
export const DropdownHeader = ({ children, ...props }) => {
    const theme = useTheme().theme.dropdown.floating.header;
    const theirProps = excludeClassName(props);
    return (_jsxs(_Fragment, { children: [_jsx("div", { className: theme, ...theirProps, children: children }), _jsx(DropdownDivider, {})] }));
};
