import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import classNames from 'classnames';
import { forwardRef } from 'react';
import { excludeClassName } from '../../helpers/exclude';
import { useTheme } from '../Flowbite/ThemeContext';
import HelperText from './HelperText';
export const Textarea = forwardRef(({ shadow, helperText, color = 'gray', ...props }, ref) => {
    const theme = useTheme().theme.formControls.textarea;
    const theirProps = excludeClassName(props);
    return (_jsxs(_Fragment, { children: [_jsx("textarea", { ref: ref, className: classNames(theme.base, theme.colors[color], theme.withShadow[shadow ? 'on' : 'off']), ...theirProps }), helperText && _jsx(HelperText, { color: color, children: helperText })] }));
});
Textarea.displayName = 'Textarea';
