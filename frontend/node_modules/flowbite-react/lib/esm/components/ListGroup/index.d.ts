import type { ComponentProps, FC, PropsWithChildren } from 'react';
export declare type ListGroupProps = PropsWithChildren<Omit<ComponentProps<'div'>, 'className'>>;
export declare const ListGroup: FC<ListGroupProps> & {
    Item: FC<import("./ListGroupItem").ListGroupItemProps>;
};
