import { jsx as _jsx } from "react/jsx-runtime";
import classNames from 'classnames';
export const TableCell = ({ children, className, ...props }) => {
    return (_jsx("td", { className: classNames('px-6 py-4', className), ...props, children: children }));
};
