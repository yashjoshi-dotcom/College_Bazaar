import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import classNames from 'classnames';
import { forwardRef } from 'react';
import { excludeClassName } from '../../helpers/exclude';
import { useTheme } from '../Flowbite/ThemeContext';
import HelperText from './HelperText';
export const FileInput = forwardRef(({ sizing = 'md', helperText, color = 'gray', ...props }, ref) => {
    const theme = useTheme().theme.formControls.fileInput;
    const theirProps = excludeClassName(props);
    return (_jsxs(_Fragment, { children: [_jsx("div", { className: theme.base, children: _jsx("div", { className: theme.field.base, children: _jsx("input", { className: classNames(theme.field.input.base, theme.field.input.colors[color], theme.field.input.sizes[sizing]), ...theirProps, type: "file", ref: ref }) }) }), helperText && _jsx(HelperText, { color: color, children: helperText })] }));
});
FileInput.displayName = 'FileInput';
