import { jsx as _jsx } from "react/jsx-runtime";
import classNames from 'classnames';
import { useTimelineContext } from './TimelineContext';
export const TimelineContent = ({ children, className, ...props }) => {
    const { horizontal } = useTimelineContext();
    return (_jsx("div", { "data-testid": "timeline-content", className: classNames({ 'mt-3 sm:pr-8': horizontal }, className), ...props, children: children }));
};
