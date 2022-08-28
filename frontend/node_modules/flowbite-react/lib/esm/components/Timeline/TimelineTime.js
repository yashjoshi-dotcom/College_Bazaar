import { jsx as _jsx } from "react/jsx-runtime";
import classNames from 'classnames';
export const TimelineTime = ({ children, className, ...props }) => {
    return (_jsx("time", { className: classNames('mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500', className), ...props, children: children }));
};
