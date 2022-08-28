import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import classNames from 'classnames';
import { useId } from 'react';
import { excludeClassName } from '../../helpers/exclude';
import { useTheme } from '../Flowbite/ThemeContext';
export const Progress = ({ color = 'blue', label = 'progressbar', labelPosition = 'none', labelProgress = false, progress, size = 'md', ...props }) => {
    const id = useId();
    const theme = useTheme().theme.progress;
    const theirProps = excludeClassName(props);
    return (_jsx(_Fragment, { children: _jsxs("div", { id: id, "aria-label": label, "aria-valuenow": progress, role: "progressbar", ...theirProps, children: [label && labelPosition === 'outside' && (_jsxs("div", { className: theme.label, children: [_jsx("span", { children: label }), labelProgress && _jsxs("span", { children: [progress, "%"] })] })), _jsx("div", { className: classNames(theme.base, theme.size[size]), children: _jsx("div", { className: classNames(theme.bar, theme.color[color], theme.size[size]), style: { width: `${progress}%` }, children: label && labelPosition === 'inside' && label }) })] }) }));
};
