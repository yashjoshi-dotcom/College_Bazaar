"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimelinePoint = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const classnames_1 = __importDefault(require("classnames"));
const TimelineContext_1 = require("./TimelineContext");
const TimelinePoint = ({ children, className, icon: Icon, ...props }) => {
    const { horizontal } = (0, TimelineContext_1.useTimelineContext)();
    return ((0, jsx_runtime_1.jsxs)("div", { "data-testid": "timeline-point", className: (0, classnames_1.default)({ 'flex items-center': horizontal }, className), ...props, children: [children, Icon ? ((0, jsx_runtime_1.jsx)("span", { className: "absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-blue-200 ring-8 ring-white dark:bg-blue-900 dark:ring-gray-900", children: (0, jsx_runtime_1.jsx)(Icon, { "aria-hidden": true, className: "h-3 w-3 text-blue-600 dark:text-blue-300" }) })) : ((0, jsx_runtime_1.jsx)("div", { className: "absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full border border-white bg-gray-200 dark:border-gray-900 dark:bg-gray-700" })), horizontal ? (0, jsx_runtime_1.jsx)("div", { className: "hidden h-0.5 w-full bg-gray-200 dark:bg-gray-700 sm:flex" }) : ''] }));
};
exports.TimelinePoint = TimelinePoint;
