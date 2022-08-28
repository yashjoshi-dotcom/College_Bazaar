"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimelineContent = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const classnames_1 = __importDefault(require("classnames"));
const TimelineContext_1 = require("./TimelineContext");
const TimelineContent = ({ children, className, ...props }) => {
    const { horizontal } = (0, TimelineContext_1.useTimelineContext)();
    return ((0, jsx_runtime_1.jsx)("div", { "data-testid": "timeline-content", className: (0, classnames_1.default)({ 'mt-3 sm:pr-8': horizontal }, className), ...props, children: children }));
};
exports.TimelineContent = TimelineContent;
