import type { ComponentProps, FC, PropsWithChildren, ReactNode } from 'react';
import type { FlowbiteColors } from '../Flowbite/FlowbiteTheme';
export interface AlertProps extends PropsWithChildren<Omit<ComponentProps<'div'>, 'color'>> {
    additionalContent?: ReactNode;
    color?: keyof AlertColors;
    icon?: FC<ComponentProps<'svg'>>;
    onDismiss?: boolean | (() => void);
    rounded?: boolean;
    withBorderAccent?: boolean;
}
export interface AlertColors extends Pick<FlowbiteColors, 'failure' | 'gray' | 'info' | 'success' | 'warning'> {
    [key: string]: string;
}
export declare const Alert: FC<AlertProps>;
