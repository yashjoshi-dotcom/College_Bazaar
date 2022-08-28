import { jsx as _jsx } from "react/jsx-runtime";
import classNames from 'classnames';
export const TableHeadCell = ({ children, className, ...props }) => {
    return (_jsx("th", { className: classNames('px-6 py-3', className), ...props, children: children }));
};
