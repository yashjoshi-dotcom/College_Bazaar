import { jsx as _jsx } from "react/jsx-runtime";
import classNames from 'classnames';
export const TimelineTitle = ({ children, className, as = 'h3', ...props }) => {
    const Tag = as;
    return (_jsx(Tag, { className: classNames('text-lg font-semibold text-gray-900 dark:text-white', className), ...props, children: children }));
};
