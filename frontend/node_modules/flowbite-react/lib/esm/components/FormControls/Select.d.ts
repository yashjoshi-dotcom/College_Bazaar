import type { ComponentProps, FC, ReactNode } from 'react';
import type { FlowbiteColors, FlowbiteSizes } from '../Flowbite/FlowbiteTheme';
export interface SelectColors extends Pick<FlowbiteColors, 'gray' | 'info' | 'failure' | 'warning' | 'success'> {
    [key: string]: string;
}
export interface SelectSizes extends Pick<FlowbiteSizes, 'sm' | 'md' | 'lg'> {
    [key: string]: string;
}
export interface SelectProps extends Omit<ComponentProps<'select'>, 'className' | 'color' | 'ref'> {
    sizing?: keyof SelectSizes;
    shadow?: boolean;
    helperText?: ReactNode;
    addon?: ReactNode;
    icon?: FC<ComponentProps<'svg'>>;
    color?: keyof SelectColors;
}
export declare const Select: import("react").ForwardRefExoticComponent<SelectProps & import("react").RefAttributes<HTMLSelectElement>>;
