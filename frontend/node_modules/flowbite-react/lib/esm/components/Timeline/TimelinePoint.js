import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import classNames from 'classnames';
import { useTimelineContext } from './TimelineContext';
export const TimelinePoint = ({ children, className, icon: Icon, ...props }) => {
    const { horizontal } = useTimelineContext();
    return (_jsxs("div", { "data-testid": "timeline-point", className: classNames({ 'flex items-center': horizontal }, className), ...props, children: [children, Icon ? (_jsx("span", { className: "absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-blue-200 ring-8 ring-white dark:bg-blue-900 dark:ring-gray-900", children: _jsx(Icon, { "aria-hidden": true, className: "h-3 w-3 text-blue-600 dark:text-blue-300" }) })) : (_jsx("div", { className: "absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full border border-white bg-gray-200 dark:border-gray-900 dark:bg-gray-700" })), horizontal ? _jsx("div", { className: "hidden h-0.5 w-full bg-gray-200 dark:bg-gray-700 sm:flex" }) : ''] }));
};
