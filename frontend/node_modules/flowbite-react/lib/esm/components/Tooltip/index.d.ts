import type { Placement } from '@floating-ui/core';
import type { ComponentProps, FC, PropsWithChildren, ReactNode } from 'react';
export interface TooltipProps extends PropsWithChildren<Omit<ComponentProps<'div'>, 'className' | 'style'>> {
    content: ReactNode;
    placement?: 'auto' | Placement;
    trigger?: 'hover' | 'click';
    style?: 'dark' | 'light' | 'auto';
    animation?: false | `duration-${number}`;
    arrow?: boolean;
}
/**
 * @see https://floating-ui.com/docs/react-dom-interactions
 */
export declare const Tooltip: FC<TooltipProps>;
