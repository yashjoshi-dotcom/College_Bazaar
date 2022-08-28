import type { ComponentProps, ReactNode } from 'react';
import type { TextInputColors, TextInputSizes } from './TextInput';
export interface FileInputProps extends Omit<ComponentProps<'input'>, 'type' | 'ref' | 'color' | 'className'> {
    sizing?: keyof TextInputSizes;
    helperText?: ReactNode;
    color?: keyof TextInputColors;
}
export declare const FileInput: import("react").ForwardRefExoticComponent<FileInputProps & import("react").RefAttributes<HTMLInputElement>>;
