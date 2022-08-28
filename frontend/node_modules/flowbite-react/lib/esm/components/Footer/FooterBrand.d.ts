import type { ComponentProps, FC, PropsWithChildren } from 'react';
export interface FooterBrandProps extends Omit<PropsWithChildren<ComponentProps<'div'>>, 'className'> {
    alt?: string;
    href?: string;
    name?: string;
    src: string;
}
export declare const FooterBrand: FC<FooterBrandProps>;
