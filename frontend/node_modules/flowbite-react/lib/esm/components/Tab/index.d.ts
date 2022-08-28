import type { ComponentProps, FC, PropsWithChildren } from 'react';
import type { FlowbiteBoolean } from '../Flowbite/FlowbiteTheme';
import type { TabProps } from './TabItem';
export interface TabStyles {
    default: string;
    underline: string;
    pills: string;
    fullWidth: string;
}
export interface TabStyleItemProps {
    base: string;
    active: FlowbiteBoolean;
}
export declare type TabStyleItem<Type> = {
    [K in keyof Type]: TabStyleItemProps;
};
export declare type TabItemStatus = 'active' | 'notActive';
export interface TabsProps extends PropsWithChildren<Omit<ComponentProps<'div'>, 'className' | 'style'>> {
    style?: keyof TabStyles;
}
export declare const TabsComponent: FC<TabsProps>;
export declare const Tabs: {
    Group: FC<TabsProps>;
    Item: FC<TabProps>;
};
