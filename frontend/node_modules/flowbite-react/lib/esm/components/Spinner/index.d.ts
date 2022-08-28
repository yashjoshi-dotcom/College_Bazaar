import type { ComponentProps, FC } from 'react';
import type { FlowbiteColors, FlowbiteSizes } from '../Flowbite/FlowbiteTheme';
export interface SpinnerProps extends Omit<ComponentProps<'span'>, 'color'> {
    color?: keyof SpinnerColors;
    light?: boolean;
    size?: keyof SpinnerSizes;
}
export interface SpinnerColors extends Pick<FlowbiteColors, 'failure' | 'gray' | 'info' | 'pink' | 'purple' | 'success' | 'warning'> {
    [key: string]: string;
}
export interface SpinnerSizes extends Pick<FlowbiteSizes, 'xs' | 'sm' | 'md' | 'lg' | 'xl'> {
    [key: string]: string;
}
export declare const Spinner: FC<SpinnerProps>;
