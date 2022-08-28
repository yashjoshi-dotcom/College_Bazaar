import type { ComponentProps, FC, PropsWithChildren } from 'react';
export interface FooterTitleProps extends Omit<PropsWithChildren<ComponentProps<'h2'>>, 'className'> {
    title: string;
}
export declare const FooterTitle: FC<FooterTitleProps>;
