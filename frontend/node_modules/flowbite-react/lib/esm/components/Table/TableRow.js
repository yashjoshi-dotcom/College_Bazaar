import { jsx as _jsx } from "react/jsx-runtime";
import classNames from 'classnames';
import { useTableContext } from './TableContext';
export const TableRow = ({ children, className, ...props }) => {
    const { striped, hoverable } = useTableContext();
    return (_jsx("tr", { "data-testid": "table-row-element", className: classNames({
            'odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700': striped,
            'hover:bg-gray-50 dark:hover:bg-gray-600': hoverable,
        }, className), ...props, children: children }));
};
