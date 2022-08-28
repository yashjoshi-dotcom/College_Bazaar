import { jsx as _jsx } from "react/jsx-runtime";
import { forwardRef } from 'react';
import { excludeClassName } from '../../helpers/exclude';
import { useTheme } from '../Flowbite/ThemeContext';
export const Radio = forwardRef((props, ref) => {
    const theme = useTheme().theme.formControls.radio;
    const theirProps = excludeClassName(props);
    return _jsx("input", { ref: ref, className: theme.base, type: "radio", ...theirProps });
});
Radio.displayName = 'Radio';
