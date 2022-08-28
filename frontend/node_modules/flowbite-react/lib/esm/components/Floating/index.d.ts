import type { Placement } from '@floating-ui/core';
import type { ComponentProps, FC, PropsWithChildren, ReactNode } from 'react';
import { FlowbiteDropdownTheme } from '../Dropdown';
export interface FlowbiteFloatingTheme {
    target: string;
    base: string;
    animation: string;
    hidden: string;
    style: {
        dark: string;
        light: string;
        auto: string;
    };
    content: string;
    arrow: {
        base: string;
        style: {
            dark: string;
            light: string;
            auto: string;
        };
        placement: string;
    };
}
export interface FloatingProps extends PropsWithChildren<Omit<ComponentProps<'div'>, 'className' | 'style'>> {
    content: ReactNode;
    theme: FlowbiteFloatingTheme | FlowbiteDropdownTheme;
    placement?: 'auto' | Placement;
    trigger?: 'hover' | 'click';
    style?: 'dark' | 'light' | 'auto';
    animation?: false | `duration-${number}`;
    arrow?: boolean;
}
/**
 * @see https://floating-ui.com/docs/react-dom-interactions
 */
export declare const Floating: FC<FloatingProps>;
