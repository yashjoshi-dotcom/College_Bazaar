import type { ComponentProps, FC, ReactNode } from 'react';
import type { FlowbiteColors, FlowbiteGradientColors, FlowbiteGradientDuoToneColors, FlowbiteSizes } from '../Flowbite/FlowbiteTheme';
import type { PositionInButtonGroup } from './ButtonGroup';
export interface ButtonProps extends Omit<ComponentProps<'button'>, 'className' | 'color'> {
    color?: keyof ButtonColors;
    gradientDuoTone?: keyof ButtonGradientDuoToneColors;
    gradientMonochrome?: keyof ButtonGradientColors;
    href?: string;
    label?: ReactNode;
    outline?: boolean;
    pill?: boolean;
    positionInGroup?: keyof PositionInButtonGroup;
    size?: keyof ButtonSizes;
}
export interface ButtonColors extends Pick<FlowbiteColors, 'dark' | 'failure' | 'gray' | 'info' | 'light' | 'purple' | 'success' | 'warning'> {
    [key: string]: string;
}
export interface ButtonGradientColors extends FlowbiteGradientColors {
    [key: string]: string;
}
export interface ButtonGradientDuoToneColors extends FlowbiteGradientDuoToneColors {
    [key: string]: string;
}
export interface ButtonOutlineColors extends Pick<FlowbiteColors, 'gray'> {
    [key: string]: string;
}
export interface ButtonSizes extends Pick<FlowbiteSizes, 'xs' | 'sm' | 'lg' | 'xl'> {
    [key: string]: string;
}
export declare const Button: FC<ButtonProps> & {
    Group: FC<import("./ButtonGroup").ButtonGroupProps>;
};
