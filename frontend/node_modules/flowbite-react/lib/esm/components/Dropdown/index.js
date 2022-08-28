import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useMemo } from 'react';
import { HiOutlineChevronDown, HiOutlineChevronLeft, HiOutlineChevronRight, HiOutlineChevronUp } from 'react-icons/hi';
import { excludeClassName } from '../../helpers/exclude';
import { Button } from '../Button';
import { Floating } from '../Floating';
import { useTheme } from '../Flowbite/ThemeContext';
import { DropdownDivider } from './DropdownDivider';
import { DropdownHeader } from './DropdownHeader';
import { DropdownItem } from './DropdownItem';
const icons = {
    top: HiOutlineChevronUp,
    right: HiOutlineChevronRight,
    bottom: HiOutlineChevronDown,
    left: HiOutlineChevronLeft,
};
const DropdownComponent = ({ children, ...props }) => {
    const theme = useTheme().theme.dropdown;
    const theirProps = excludeClassName(props);
    const { placement = props.inline ? 'bottom-start' : 'bottom', trigger = 'click', label, inline, floatingArrow = false, arrowIcon = true, ...buttonProps } = theirProps;
    const Icon = useMemo(() => {
        const [p] = placement.split('-');
        return icons[p] ?? HiOutlineChevronDown;
    }, [placement]);
    const content = useMemo(() => _jsx("ul", { className: theme.content, children: children }), [children, theme]);
    const TriggerWrapper = ({ children }) => inline ? _jsx("button", { className: theme.inlineWrapper, children: children }) : _jsx(Button, { ...buttonProps, children: children });
    return (_jsx(Floating, { content: content, style: "auto", animation: "duration-100", placement: placement, arrow: floatingArrow, trigger: trigger, theme: theme.floating, children: _jsxs(TriggerWrapper, { children: [label, arrowIcon && _jsx(Icon, { className: theme.arrowIcon })] }) }));
};
DropdownComponent.displayName = 'Dropdown';
DropdownItem.displayName = 'Dropdown.Item';
DropdownHeader.displayName = 'Dropdown.Header';
DropdownDivider.displayName = 'Dropdown.Divider';
export const Dropdown = Object.assign(DropdownComponent, {
    Item: DropdownItem,
    Header: DropdownHeader,
    Divider: DropdownDivider,
});
