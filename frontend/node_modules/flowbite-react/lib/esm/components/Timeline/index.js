import { jsx as _jsx } from "react/jsx-runtime";
import classNames from 'classnames';
import { TimelineBody } from './TimelineBody';
import { TimelineContent } from './TimelineContent';
import { TimelineContext } from './TimelineContext';
import { TimelineItem } from './TimelineItem';
import { TimelinePoint } from './TimelinePoint';
import { TimelineTime } from './TimelineTime';
import { TimelineTitle } from './TimelineTitle';
const TimelineComponent = ({ children, horizontal }) => {
    return (_jsx(TimelineContext.Provider, { value: { horizontal }, children: _jsx("ol", { "data-testid": "timeline-component", className: classNames({
                'relative border-l border-gray-200 dark:border-gray-700': !horizontal,
                'items-center sm:flex': horizontal,
            }), children: children }) }));
};
TimelineComponent.displayName = 'Timeline';
TimelineItem.displayName = 'Timeline.Item';
TimelinePoint.displayName = 'Timeline.Point';
TimelineContent.displayName = 'Timeline.Content';
TimelineTime.displayName = 'Timeline.Time';
TimelineTitle.displayName = 'Timeline.Title';
TimelineBody.displayName = 'Timeline.Body';
export const Timeline = Object.assign(TimelineComponent, {
    Item: TimelineItem,
    Point: TimelinePoint,
    Content: TimelineContent,
    Time: TimelineTime,
    Title: TimelineTitle,
    Body: TimelineBody,
});
