import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import classNames from 'classnames';
import { forwardRef } from 'react';
import { excludeClassName } from '../../helpers/exclude';
import { useTheme } from '../Flowbite/ThemeContext';
import HelperText from './HelperText';
export const TextInput = forwardRef(({ sizing = 'md', shadow, helperText, addon, icon: Icon, color = 'gray', ...props }, ref) => {
    const theme = useTheme().theme.formControls.textInput;
    const theirProps = excludeClassName(props);
    return (_jsxs(_Fragment, { children: [_jsxs("div", { className: theme.base, children: [addon && _jsx("span", { className: theme.addon, children: addon }), _jsxs("div", { className: theme.field.base, children: [Icon && (_jsx("div", { className: theme.field.icon.base, children: _jsx(Icon, { className: theme.field.icon.svg }) })), _jsx("input", { className: classNames(theme.field.input.base, theme.field.input.colors[color], theme.field.input.withIcon[Icon ? 'on' : 'off'], theme.field.input.withAddon[addon ? 'on' : 'off'], theme.field.input.withShadow[shadow ? 'on' : 'off'], theme.field.input.sizes[sizing]), ...theirProps, ref: ref })] })] }), helperText && _jsx(HelperText, { color: color, children: helperText })] }));
});
TextInput.displayName = 'TextInput';
