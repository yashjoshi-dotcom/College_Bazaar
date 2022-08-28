import type { ComponentProps, FC, PropsWithChildren } from 'react';
export interface FooterIconProps extends Omit<PropsWithChildren<ComponentProps<'a'>>, 'className'> {
    ariaLabel?: string;
    href?: string;
    icon: FC<ComponentProps<'svg'>>;
}
export declare const FooterIcon: FC<FooterIconProps>;
