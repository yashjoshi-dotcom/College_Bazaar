import type { ComponentProps, FC } from 'react';
export interface NavbarToggleProps extends Omit<ComponentProps<'button'>, 'className'> {
    barIcon?: FC<ComponentProps<'svg'>>;
}
export declare const NavbarToggle: FC<NavbarToggleProps>;
