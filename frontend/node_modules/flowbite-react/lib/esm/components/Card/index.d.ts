import type { ComponentProps, FC, PropsWithChildren } from 'react';
export interface CardProps extends PropsWithChildren<Omit<ComponentProps<'div'>, 'className'>> {
    horizontal?: boolean;
    href?: string;
    imgAlt?: string;
    imgSrc?: string;
}
export declare const Card: FC<CardProps>;
