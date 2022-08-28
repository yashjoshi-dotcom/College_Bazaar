import { jsx as _jsx } from "react/jsx-runtime";
import { forwardRef } from 'react';
import { excludeClassName } from '../../helpers/exclude';
import { useTheme } from '../Flowbite/ThemeContext';
export const Checkbox = forwardRef((props, ref) => {
    const theme = useTheme().theme.formControls.checkbox;
    const theirProps = excludeClassName(props);
    return _jsx("input", { ref: ref, className: theme.base, type: "checkbox", ...theirProps });
});
Checkbox.displayName = 'Checkbox';
