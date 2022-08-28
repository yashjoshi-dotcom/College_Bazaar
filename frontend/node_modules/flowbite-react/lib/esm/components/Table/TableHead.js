import { jsx as _jsx } from "react/jsx-runtime";
import classNames from 'classnames';
export const TableHead = ({ children, className, ...props }) => {
    return (_jsx("thead", { className: classNames('bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400', className), ...props, children: _jsx("tr", { children: children }) }));
};
