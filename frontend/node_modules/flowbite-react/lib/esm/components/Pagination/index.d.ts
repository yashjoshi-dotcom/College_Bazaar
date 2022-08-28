import type { ComponentProps, FC, PropsWithChildren } from 'react';
export declare type PaginationProps = PropsWithChildren<Pagination>;
interface Pagination extends Omit<ComponentProps<'nav'>, 'className'> {
    currentPage: number;
    layout?: 'navigation' | 'pagination' | 'table';
    onPageChange: (page: number) => void;
    showIcons?: boolean;
    totalPages: number;
}
export declare const Pagination: FC<PaginationProps>;
export {};
