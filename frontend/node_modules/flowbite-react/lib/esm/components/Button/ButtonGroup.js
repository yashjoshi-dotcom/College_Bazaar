import { jsx as _jsx } from "react/jsx-runtime";
import { Children, cloneElement, useMemo } from 'react';
import { excludeClassName } from '../../helpers/exclude';
import { useTheme } from '../Flowbite/ThemeContext';
const ButtonGroup = ({ children, outline, pill, ...props }) => {
    const theirProps = excludeClassName(props);
    const items = useMemo(() => Children.map(children, (child, index) => cloneElement(child, {
        outline,
        pill,
        positionInGroup: index === 0 ? 'start' : index === children.length - 1 ? 'end' : 'middle',
    })), [children, outline, pill]);
    const theme = useTheme().theme.buttonGroup;
    return (_jsx("div", { className: theme.base, role: "group", ...theirProps, children: items }));
};
ButtonGroup.displayName = 'Button.Group';
export default ButtonGroup;
