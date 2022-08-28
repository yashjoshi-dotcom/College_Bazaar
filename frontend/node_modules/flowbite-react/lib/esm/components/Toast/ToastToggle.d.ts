import type { ComponentProps, FC } from 'react';
declare type ToastToggleProps = ComponentProps<'button'> & {
    xIcon?: FC<ComponentProps<'svg'>>;
};
export declare const ToastToggle: FC<ToastToggleProps>;
export {};
