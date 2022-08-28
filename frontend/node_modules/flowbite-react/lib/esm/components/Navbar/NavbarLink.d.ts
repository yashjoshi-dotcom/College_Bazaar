import type { ComponentProps, FC, PropsWithChildren } from 'react';
export interface NavbarLinkProps extends Omit<PropsWithChildren<ComponentProps<'a'>>, 'className'> {
    active?: boolean;
    disabled?: boolean;
    href?: string;
}
export declare const NavbarLink: FC<NavbarLinkProps>;
