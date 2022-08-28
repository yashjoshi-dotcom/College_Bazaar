import type { ComponentProps, FC, ReactNode } from 'react';
import type { FlowbiteColors, FlowbiteSizes } from '../Flowbite/FlowbiteTheme';
export interface TextInputColors extends Pick<FlowbiteColors, 'gray' | 'info' | 'failure' | 'warning' | 'success'> {
    [key: string]: string;
}
export interface TextInputSizes extends Pick<FlowbiteSizes, 'sm' | 'md' | 'lg'> {
    [key: string]: string;
}
export interface TextInputProps extends Omit<ComponentProps<'input'>, 'ref' | 'color' | 'className'> {
    sizing?: keyof TextInputSizes;
    shadow?: boolean;
    helperText?: ReactNode;
    addon?: ReactNode;
    icon?: FC<ComponentProps<'svg'>>;
    color?: keyof TextInputColors;
}
export declare const TextInput: import("react").ForwardRefExoticComponent<TextInputProps & import("react").RefAttributes<HTMLInputElement>>;
