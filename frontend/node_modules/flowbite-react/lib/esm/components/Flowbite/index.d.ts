import type { FC, HTMLAttributes } from 'react';
import type { DeepPartial } from '..';
import type { FlowbiteTheme } from './FlowbiteTheme';
export interface ThemeProps {
    dark?: boolean;
    theme?: DeepPartial<FlowbiteTheme>;
    usePreferences?: boolean;
}
interface FlowbiteProps extends HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    theme?: ThemeProps;
}
export declare const Flowbite: FC<FlowbiteProps>;
export type { FlowbiteTheme } from './FlowbiteTheme';
