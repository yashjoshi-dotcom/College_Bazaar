import type { ComponentProps, FC, PropsWithChildren } from 'react';
export interface FooterLinkProps extends Omit<PropsWithChildren<ComponentProps<'a'>>, 'className'> {
    href: string;
}
export declare const FooterLink: FC<FooterLinkProps>;
