import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import classNames from 'classnames';
import { excludeClassName } from '../../helpers/exclude';
import { useTheme } from '../Flowbite/ThemeContext';
export const Card = ({ children, horizontal, href, imgAlt, imgSrc, ...props }) => {
    const theirProps = excludeClassName(props);
    const theme = useTheme().theme.card;
    const Component = typeof href === 'undefined' ? 'div' : 'a';
    return (_jsxs(Component, { className: classNames(theme.base, theme.horizontal[horizontal ? 'on' : 'off'], href && theme.href), "data-testid": "flowbite-card", href: href, ...theirProps, children: [imgSrc && (_jsx("img", { alt: imgAlt ?? '', className: classNames(theme.img.base, theme.img.horizontal[horizontal ? 'on' : 'off']), src: imgSrc })), _jsx("div", { className: theme.children, children: children })] }));
};
