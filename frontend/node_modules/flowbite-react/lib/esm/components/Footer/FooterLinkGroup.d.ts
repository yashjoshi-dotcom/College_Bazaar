import type { ComponentProps, FC, PropsWithChildren } from 'react';
export interface FooterLinkGroupProps extends PropsWithChildren<Omit<ComponentProps<'ul'>, 'className'>> {
    col?: boolean;
}
export declare const FooterLinkGroup: FC<FooterLinkGroupProps>;
