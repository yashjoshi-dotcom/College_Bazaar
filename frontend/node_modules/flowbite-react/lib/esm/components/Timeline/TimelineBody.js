import { jsx as _jsx } from "react/jsx-runtime";
import classNames from 'classnames';
export const TimelineBody = ({ children, className, ...props }) => {
    return (_jsx("p", { className: classNames('mb-4 text-base font-normal text-gray-500 dark:text-gray-400', className), ...props, children: children }));
};
