import type { FC, PropsWithChildren, ReactNode } from 'react';
import type { ButtonProps } from '../Button';
import type { FloatingProps } from '../Floating';
export interface FlowbiteDropdownTheme {
    target: string;
    base: string;
    animation: string;
    hidden: string;
    style: {
        dark: string;
        light: string;
        auto: string;
    };
    header: string;
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
    item: {
        base: string;
        icon: string;
    };
    divider: string;
}
export interface DropdownProps extends PropsWithChildren<Pick<FloatingProps, 'placement' | 'trigger'>>, ButtonProps {
    label: ReactNode;
    inline?: boolean;
    floatingArrow?: boolean;
    arrowIcon?: boolean;
}
export declare const Dropdown: FC<DropdownProps> & {
    Item: FC<import("./DropdownItem").DropdownItemProps>;
    Header: FC<PropsWithChildren<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>>>;
    Divider: FC<{}>;
};
