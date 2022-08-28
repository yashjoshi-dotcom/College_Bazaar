import type { ComponentProps, FC, PropsWithChildren } from 'react';
export declare type TimelineItemProps = PropsWithChildren<ComponentProps<'li'> & {
    className?: string;
}>;
export declare const TimelineItem: FC<TimelineItemProps>;
