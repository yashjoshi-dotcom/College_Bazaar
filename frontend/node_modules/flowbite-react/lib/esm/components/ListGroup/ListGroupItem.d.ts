import type { ComponentProps, FC, PropsWithChildren } from 'react';
export interface ListGroupItemProps extends PropsWithChildren<Omit<ComponentProps<'a' | 'button'>, 'className'>> {
    active?: boolean;
    disabled?: boolean;
    href?: string;
    icon?: FC<ComponentProps<'svg'>>;
    onClick?: () => void;
}
export declare const ListGroupItem: FC<ListGroupItemProps>;
