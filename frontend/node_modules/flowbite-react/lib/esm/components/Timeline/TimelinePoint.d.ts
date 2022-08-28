import type { ComponentProps, FC, PropsWithChildren } from 'react';
export declare type TimelnePointProps = PropsWithChildren<ComponentProps<'div'> & {
    icon?: FC<ComponentProps<'svg'>>;
    className?: string;
}>;
export declare const TimelinePoint: FC<TimelnePointProps>;
