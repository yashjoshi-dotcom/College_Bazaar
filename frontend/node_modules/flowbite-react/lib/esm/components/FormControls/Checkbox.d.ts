import type { ComponentProps } from 'react';
export declare type CheckboxProps = Omit<ComponentProps<'input'>, 'type' | 'className' | 'ref'>;
export declare const Checkbox: import("react").ForwardRefExoticComponent<CheckboxProps & import("react").RefAttributes<HTMLInputElement>>;
