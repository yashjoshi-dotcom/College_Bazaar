import { jsx as _jsx } from "react/jsx-runtime";
import classNames from 'classnames';
import { useTimelineContext } from './TimelineContext';
export const TimelineItem = ({ children, className, ...props }) => {
    const { horizontal } = useTimelineContext();
    return (_jsx("li", { "data-testid": "timeline-item", className: classNames({ 'mb-10 ml-6': !horizontal, 'relative mb-6 sm:mb-0': horizontal }, className), ...props, children: children }));
};
