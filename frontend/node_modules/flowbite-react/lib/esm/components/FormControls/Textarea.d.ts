import type { ComponentProps, ReactNode } from 'react';
import type { FlowbiteColors } from '../Flowbite/FlowbiteTheme';
export interface TextareaColors extends Pick<FlowbiteColors, 'gray' | 'info' | 'failure' | 'warning' | 'success'> {
    [key: string]: string;
}
export interface TextareaProps extends Omit<ComponentProps<'textarea'>, 'className' | 'color' | 'ref'> {
    shadow?: boolean;
    helperText?: ReactNode;
    color?: keyof TextareaColors;
}
export declare const Textarea: import("react").ForwardRefExoticComponent<TextareaProps & import("react").RefAttributes<HTMLTextAreaElement>>;
