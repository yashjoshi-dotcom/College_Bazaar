import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import classNames from 'classnames';
import { excludeClassName } from '../../helpers/exclude';
import { useTheme } from '../Flowbite/ThemeContext';
import ButtonGroup from './ButtonGroup';
const ButtonComponent = ({ children, color = 'info', disabled = false, gradientDuoTone, gradientMonochrome, href, label, outline = false, pill = false, positionInGroup = 'none', size = 'md', ...props }) => {
    const isLink = typeof href !== 'undefined';
    const theirProps = excludeClassName(props);
    const { buttonGroup: groupTheme, button: theme } = useTheme().theme;
    const Component = isLink ? 'a' : 'button';
    return (_jsx(Component, { className: classNames(disabled && theme.disabled, !gradientDuoTone && !gradientMonochrome && theme.color[color], gradientDuoTone && !gradientMonochrome && theme.gradientDuoTone[gradientDuoTone], !gradientDuoTone && gradientMonochrome && theme.gradient[gradientMonochrome], groupTheme.position[positionInGroup], outline && theme.outline.color[color], theme.base, theme.pill[pill ? 'on' : 'off']), disabled: disabled, href: href, type: isLink ? undefined : 'button', ...theirProps, children: _jsx("span", { className: classNames(theme.inner.base, theme.inner.position[positionInGroup], theme.outline[outline ? 'on' : 'off'], theme.outline.pill[outline && pill ? 'on' : 'off'], theme.size[size]), children: _jsxs(_Fragment, { children: [typeof children !== 'undefined' && children, typeof label !== 'undefined' && (_jsx("span", { className: theme.label, "data-testid": "flowbite-button-label", children: label }))] }) }) }));
};
ButtonComponent.displayName = 'Button';
export const Button = Object.assign(ButtonComponent, {
    Group: ButtonGroup,
});
