import type { ComponentProps, FC, PropsWithChildren } from 'react';
export declare type DropdownItemProps = PropsWithChildren<{
    onClick?: () => void;
    icon?: FC<ComponentProps<'svg'>>;
}>;
export declare const DropdownItem: FC<DropdownItemProps>;
