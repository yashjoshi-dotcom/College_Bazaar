export declare type TableContext = {
    striped?: boolean;
    hoverable?: boolean;
};
export declare const TableContext: import("react").Context<TableContext | undefined>;
export declare function useTableContext(): TableContext;
