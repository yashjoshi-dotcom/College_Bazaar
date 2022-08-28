import type { FC, PropsWithChildren } from 'react';
export declare type TimelineProps = PropsWithChildren<{
    className?: string;
    horizontal?: boolean;
}>;
export declare const Timeline: FC<TimelineProps> & {
    Item: FC<import("./TimelineItem").TimelineItemProps>;
    Point: FC<import("./TimelinePoint").TimelnePointProps>;
    Content: FC<import("./TimelineContent").TimelineContentProps>;
    Time: FC<import("./TimelineTime").TimelineTimeProps>;
    Title: FC<import("./TimelineTitle").TimelineTitleProps>;
    Body: FC<import("./TimelineBody").TimelineBodyProps>;
};
