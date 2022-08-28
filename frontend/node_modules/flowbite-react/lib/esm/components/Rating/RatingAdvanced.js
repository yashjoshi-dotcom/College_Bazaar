import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { excludeClassName } from '../../helpers/exclude';
import { useTheme } from '../Flowbite/ThemeContext';
export const RatingAdvanced = ({ percentFilled = 0, children, ...props }) => {
    const theme = useTheme().theme.rating.advanced;
    const theirProps = excludeClassName(props);
    return (_jsxs("div", { className: theme.base, ...theirProps, children: [_jsx("span", { className: theme.label, children: children }), _jsx("div", { className: theme.progress.base, children: _jsx("div", { className: theme.progress.fill, "data-testid": "flowbite-rating-fill", style: { width: `${percentFilled}%` } }) }), _jsx("span", { className: theme.progress.label, children: `${percentFilled}%` })] }));
};
