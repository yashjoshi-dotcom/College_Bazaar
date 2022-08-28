import type { ComponentProps, FC, PropsWithChildren } from 'react';
import type { Duration } from './ToastContext';
export interface ToastProps extends PropsWithChildren<Omit<ComponentProps<'div'>, 'className'>> {
    duration?: Duration;
}
export declare const Toast: FC<ToastProps> & {
    Toggle: FC<import("react").ClassAttributes<HTMLButtonElement> & import("react").ButtonHTMLAttributes<HTMLButtonElement> & {
        xIcon?: FC<import("react").SVGProps<SVGSVGElement>> | undefined;
    }>;
};
