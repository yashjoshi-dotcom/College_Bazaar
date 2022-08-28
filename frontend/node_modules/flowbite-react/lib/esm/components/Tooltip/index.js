import { jsx as _jsx } from "react/jsx-runtime";
import { excludeClassName } from '../../helpers/exclude';
import { Floating } from '../Floating';
import { useTheme } from '../Flowbite/ThemeContext';
/**
 * @see https://floating-ui.com/docs/react-dom-interactions
 */
export const Tooltip = ({ animation = 'duration-300', arrow = true, children, content, placement = 'top', style = 'dark', trigger = 'hover', ...props }) => {
    const theme = useTheme().theme.tooltip;
    const theirProps = excludeClassName(props);
    return (_jsx(Floating, { content: content, style: style, animation: animation, placement: placement, arrow: arrow, trigger: trigger, theme: theme, ...theirProps, children: children }));
};
