import type { ComponentProps, FC, PropsWithChildren } from 'react';
import type { FlowbiteHeadingLevel } from '../Flowbite/FlowbiteTheme';
export declare type TimelineTitleProps = PropsWithChildren<ComponentProps<FlowbiteHeadingLevel> & {
    className?: string;
    as?: FlowbiteHeadingLevel;
}>;
export declare const TimelineTitle: FC<TimelineTitleProps>;
