"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Button = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const classnames_1 = __importDefault(require("classnames"));
const exclude_1 = require("../../helpers/exclude");
const ThemeContext_1 = require("../Flowbite/ThemeContext");
const ButtonGroup_1 = __importDefault(require("./ButtonGroup"));
const ButtonComponent = ({ children, color = 'info', disabled = false, gradientDuoTone, gradientMonochrome, href, label, outline = false, pill = false, positionInGroup = 'none', size = 'md', ...props }) => {
    const isLink = typeof href !== 'undefined';
    const theirProps = (0, exclude_1.excludeClassName)(props);
    const { buttonGroup: groupTheme, button: theme } = (0, ThemeContext_1.useTheme)().theme;
    const Component = isLink ? 'a' : 'button';
    return ((0, jsx_runtime_1.jsx)(Component, { className: (0, classnames_1.default)(disabled && theme.disabled, !gradientDuoTone && !gradientMonochrome && theme.color[color], gradientDuoTone && !gradientMonochrome && theme.gradientDuoTone[gradientDuoTone], !gradientDuoTone && gradientMonochrome && theme.gradient[gradientMonochrome], groupTheme.position[positionInGroup], outline && theme.outline.color[color], theme.base, theme.pill[pill ? 'on' : 'off']), disabled: disabled, href: href, type: isLink ? undefined : 'button', ...theirProps, children: (0, jsx_runtime_1.jsx)("span", { className: (0, classnames_1.default)(theme.inner.base, theme.inner.position[positionInGroup], theme.outline[outline ? 'on' : 'off'], theme.outline.pill[outline && pill ? 'on' : 'off'], theme.size[size]), children: (0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [typeof children !== 'undefined' && children, typeof label !== 'undefined' && ((0, jsx_runtime_1.jsx)("span", { className: theme.label, "data-testid": "flowbite-button-label", children: label }))] }) }) }));
};
ButtonComponent.displayName = 'Button';
exports.Button = Object.assign(ButtonComponent, {
    Group: ButtonGroup_1.default,
});
