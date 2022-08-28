import { jsx as _jsx } from "react/jsx-runtime";
import classNames from 'classnames';
import { TableBody } from './TableBody';
import { TableCell } from './TableCell';
import { TableContext } from './TableContext';
import { TableHead } from './TableHead';
import { TableHeadCell } from './TableHeadCell';
import { TableRow } from './TableRow';
const TableComponent = ({ children, striped, hoverable, className, ...props }) => {
    return (_jsx("div", { "data-testid": "table-element", className: "relative overflow-x-auto shadow-md sm:rounded-lg", children: _jsx(TableContext.Provider, { value: { striped, hoverable }, children: _jsx("table", { className: classNames('w-full text-left text-sm text-gray-500 dark:text-gray-400', className), ...props, children: children }) }) }));
};
TableComponent.displayName = 'Table';
TableHead.displayName = 'Table.Head';
TableBody.displayName = 'Table.Body';
TableRow.displayName = 'Table.Row';
TableCell.displayName = 'Table.Cell';
TableHeadCell.displayName = 'Table.HeadCell';
export const Table = Object.assign(TableComponent, {
    Head: TableHead,
    Body: TableBody,
    Row: TableRow,
    Cell: TableCell,
    HeadCell: TableHeadCell,
});
