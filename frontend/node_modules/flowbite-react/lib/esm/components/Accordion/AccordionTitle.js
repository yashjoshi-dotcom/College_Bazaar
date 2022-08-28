import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import classNames from 'classnames';
import { excludeClassName } from '../../helpers/exclude';
import { useTheme } from '../Flowbite/ThemeContext';
import { useAccordionContext } from './AccordionPanelContext';
export const AccordionTitle = ({ as: Heading = 'h2', children, ...props }) => {
    const theirProps = excludeClassName(props);
    const { arrowIcon: ArrowIcon, flush, isOpen, setOpen } = useAccordionContext();
    const theme = useTheme().theme.accordion.title;
    const onClick = () => typeof setOpen !== 'undefined' && setOpen();
    return (_jsxs("button", { className: classNames(theme.base, theme.flush[flush ? 'on' : 'off'], theme.open[isOpen ? 'on' : 'off']), onClick: onClick, type: "button", ...theirProps, children: [_jsx(Heading, { className: theme.heading, "data-testid": "flowbite-accordion-heading", children: children }), ArrowIcon && (_jsx(ArrowIcon, { "aria-hidden": true, className: classNames(theme.arrow.base, theme.arrow.open[isOpen ? 'on' : 'off']), "data-testid": "flowbite-accordion-arrow" }))] }));
};
