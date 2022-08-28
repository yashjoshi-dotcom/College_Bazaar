import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import classNames from 'classnames';
import { excludeClassName } from '../../helpers/exclude';
import { useTheme } from '../Flowbite/ThemeContext';
import AvatarGroup from './AvatarGroup';
import AvatarGroupCounter from './AvatarGroupCounter';
const AvatarComponent = ({ alt = '', bordered = false, children, img, rounded = false, size = 'md', stacked = false, status, statusPosition = 'top-left', ...props }) => {
    const theirProps = excludeClassName(props);
    const theme = useTheme().theme.avatar;
    return (_jsxs("div", { className: theme.base, "data-testid": "flowbite-avatar", ...theirProps, children: [_jsxs("div", { className: "relative", children: [img ? (_jsx("img", { alt: alt, className: classNames(bordered && theme.bordered, rounded && theme.rounded, stacked && theme.stacked, theme.img.on, theme.size[size]), "data-testid": "flowbite-avatar-img", src: img })) : (_jsx("div", { className: classNames(bordered && theme.bordered, rounded && theme.rounded, stacked && theme.stacked, theme.img.off, theme.size[size]), "data-testid": "flowbite-avatar-img", children: _jsx("svg", { className: "absolute -bottom-1 h-auto w-auto text-gray-400", fill: "currentColor", viewBox: "0 0 20 20", xmlns: "http://www.w3.org/2000/svg", children: _jsx("path", { fillRule: "evenodd", d: "M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z", clipRule: "evenodd" }) }) })), status && (_jsx("span", { className: classNames(theme.status.base, theme.status[status], theme.statusPosition[statusPosition]) }))] }), children && _jsx("div", { children: children })] }));
};
AvatarComponent.displayName = 'Avatar';
export const Avatar = Object.assign(AvatarComponent, {
    Group: AvatarGroup,
    Counter: AvatarGroupCounter,
});
