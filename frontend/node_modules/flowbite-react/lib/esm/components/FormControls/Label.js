import { jsx as _jsx } from "react/jsx-runtime";
import classNames from 'classnames';
import { excludeClassName } from '../../helpers/exclude';
import { useTheme } from '../Flowbite/ThemeContext';
export const Label = ({ children, color = 'default', disabled = false, value, ...props }) => {
    const theme = useTheme().theme.formControls.label;
    const theirProps = excludeClassName(props);
    return (_jsx("label", { className: classNames(theme.base, theme.colors[color], disabled ?? theme.disabled), ...theirProps, children: value ?? children ?? '' }));
};
