import type { ComponentProps, FC, PropsWithChildren } from 'react';
export interface NavbarComponentProps extends Omit<PropsWithChildren<ComponentProps<'nav'>>, 'className'> {
    menuOpen?: boolean;
    fluid?: boolean;
    rounded?: boolean;
    border?: boolean;
}
export declare const Navbar: FC<NavbarComponentProps> & {
    Brand: FC<import("./NavbarBrand").NavbarBrandProps>;
    Collapse: FC<import("./NavbarCollapse").NavbarCollapseProps>;
    Link: FC<import("./NavbarLink").NavbarLinkProps>;
    Toggle: FC<import("./NavbarToggle").NavbarToggleProps>;
};
