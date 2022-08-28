"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dropdown = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const hi_1 = require("react-icons/hi");
const exclude_1 = require("../../helpers/exclude");
const Button_1 = require("../Button");
const Floating_1 = require("../Floating");
const ThemeContext_1 = require("../Flowbite/ThemeContext");
const DropdownDivider_1 = require("./DropdownDivider");
const DropdownHeader_1 = require("./DropdownHeader");
const DropdownItem_1 = require("./DropdownItem");
const icons = {
    top: hi_1.HiOutlineChevronUp,
    right: hi_1.HiOutlineChevronRight,
    bottom: hi_1.HiOutlineChevronDown,
    left: hi_1.HiOutlineChevronLeft,
};
const DropdownComponent = ({ children, ...props }) => {
    const theme = (0, ThemeContext_1.useTheme)().theme.dropdown;
    const theirProps = (0, exclude_1.excludeClassName)(props);
    const { placement = props.inline ? 'bottom-start' : 'bottom', trigger = 'click', label, inline, floatingArrow = false, arrowIcon = true, ...buttonProps } = theirProps;
    const Icon = (0, react_1.useMemo)(() => {
        const [p] = placement.split('-');
        return icons[p] ?? hi_1.HiOutlineChevronDown;
    }, [placement]);
    const content = (0, react_1.useMemo)(() => (0, jsx_runtime_1.jsx)("ul", { className: theme.content, children: children }), [children, theme]);
    const TriggerWrapper = ({ children }) => inline ? (0, jsx_runtime_1.jsx)("button", { className: theme.inlineWrapper, children: children }) : (0, jsx_runtime_1.jsx)(Button_1.Button, { ...buttonProps, children: children });
    return ((0, jsx_runtime_1.jsx)(Floating_1.Floating, { content: content, style: "auto", animation: "duration-100", placement: placement, arrow: floatingArrow, trigger: trigger, theme: theme.floating, children: (0, jsx_runtime_1.jsxs)(TriggerWrapper, { children: [label, arrowIcon && (0, jsx_runtime_1.jsx)(Icon, { className: theme.arrowIcon })] }) }));
};
DropdownComponent.displayName = 'Dropdown';
DropdownItem_1.DropdownItem.displayName = 'Dropdown.Item';
DropdownHeader_1.DropdownHeader.displayName = 'Dropdown.Header';
DropdownDivider_1.DropdownDivider.displayName = 'Dropdown.Divider';
exports.Dropdown = Object.assign(DropdownComponent, {
    Item: DropdownItem_1.DropdownItem,
    Header: DropdownHeader_1.DropdownHeader,
    Divider: DropdownDivider_1.DropdownDivider,
});
