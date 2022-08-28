import type { ComponentProps } from 'react';
export declare type RadioProps = Omit<ComponentProps<'input'>, 'type' | 'className' | 'ref'>;
export declare const Radio: import("react").ForwardRefExoticComponent<RadioProps & import("react").RefAttributes<HTMLInputElement>>;
