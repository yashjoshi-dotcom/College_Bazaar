"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Avatar = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const classnames_1 = __importDefault(require("classnames"));
const exclude_1 = require("../../helpers/exclude");
const ThemeContext_1 = require("../Flowbite/ThemeContext");
const AvatarGroup_1 = __importDefault(require("./AvatarGroup"));
const AvatarGroupCounter_1 = __importDefault(require("./AvatarGroupCounter"));
const AvatarComponent = ({ alt = '', bordered = false, children, img, rounded = false, size = 'md', stacked = false, status, statusPosition = 'top-left', ...props }) => {
    const theirProps = (0, exclude_1.excludeClassName)(props);
    const theme = (0, ThemeContext_1.useTheme)().theme.avatar;
    return ((0, jsx_runtime_1.jsxs)("div", { className: theme.base, "data-testid": "flowbite-avatar", ...theirProps, children: [(0, jsx_runtime_1.jsxs)("div", { className: "relative", children: [img ? ((0, jsx_runtime_1.jsx)("img", { alt: alt, className: (0, classnames_1.default)(bordered && theme.bordered, rounded && theme.rounded, stacked && theme.stacked, theme.img.on, theme.size[size]), "data-testid": "flowbite-avatar-img", src: img })) : ((0, jsx_runtime_1.jsx)("div", { className: (0, classnames_1.default)(bordered && theme.bordered, rounded && theme.rounded, stacked && theme.stacked, theme.img.off, theme.size[size]), "data-testid": "flowbite-avatar-img", children: (0, jsx_runtime_1.jsx)("svg", { className: "absolute -bottom-1 h-auto w-auto text-gray-400", fill: "currentColor", viewBox: "0 0 20 20", xmlns: "http://www.w3.org/2000/svg", children: (0, jsx_runtime_1.jsx)("path", { fillRule: "evenodd", d: "M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z", clipRule: "evenodd" }) }) })), status && ((0, jsx_runtime_1.jsx)("span", { className: (0, classnames_1.default)(theme.status.base, theme.status[status], theme.statusPosition[statusPosition]) }))] }), children && (0, jsx_runtime_1.jsx)("div", { children: children })] }));
};
AvatarComponent.displayName = 'Avatar';
exports.Avatar = Object.assign(AvatarComponent, {
    Group: AvatarGroup_1.default,
    Counter: AvatarGroupCounter_1.default,
});
