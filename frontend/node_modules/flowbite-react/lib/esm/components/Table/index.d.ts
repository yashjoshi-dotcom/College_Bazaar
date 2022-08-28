import type { ComponentProps, FC, PropsWithChildren } from 'react';
import { TableContext } from './TableContext';
export declare type TableProps = PropsWithChildren<ComponentProps<'table'> & TableContext>;
export declare const Table: FC<TableProps> & {
    Head: FC<import("./TableHead").TableHeadProps>;
    Body: FC<import("./TableBody").TableBodyProps>;
    Row: FC<import("./TableRow").TableRowProps>;
    Cell: FC<import("./TableCell").TableCellProps>;
    HeadCell: FC<import("./TableHeadCell").TableHeadCellProps>;
};
