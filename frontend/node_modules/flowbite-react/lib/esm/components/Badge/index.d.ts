import type { ComponentProps, FC, PropsWithChildren } from 'react';
import type { FlowbiteColors, FlowbiteSizes } from '../Flowbite/FlowbiteTheme';
export interface BadgeProps extends PropsWithChildren<Omit<ComponentProps<'span'>, 'className' | 'color'>> {
    color?: keyof BadgeColors;
    href?: string;
    icon?: FC<ComponentProps<'svg'>>;
    size?: keyof BadgeSizes;
}
export interface BadgeColors extends Pick<FlowbiteColors, 'failure' | 'gray' | 'indigo' | 'info' | 'pink' | 'purple' | 'success'> {
    [key: string]: string;
}
export interface BadgeSizes extends Pick<FlowbiteSizes, 'xs' | 'sm'> {
    [key: string]: string;
}
export declare const Badge: FC<BadgeProps>;
