import { jsx as _jsx } from "react/jsx-runtime";
import classNames from 'classnames';
import { Children, cloneElement, useMemo, useState } from 'react';
import { HiChevronDown } from 'react-icons/hi';
import { excludeClassName } from '../../helpers/exclude';
import { useTheme } from '../Flowbite/ThemeContext';
import { AccordionContent } from './AccordionContent';
import { AccordionPanel } from './AccordionPanel';
import { AccordionTitle } from './AccordionTitle';
const AccordionComponent = ({ alwaysOpen = false, arrowIcon = HiChevronDown, children, flush = false, ...props }) => {
    const theirProps = excludeClassName(props);
    const [isOpen, setOpen] = useState(0);
    const panels = useMemo(() => Children.map(children, (child, i) => cloneElement(child, { alwaysOpen, arrowIcon, flush, isOpen: isOpen === i, setOpen: () => setOpen(i) })), [alwaysOpen, arrowIcon, children, flush, isOpen]);
    const theme = useTheme().theme.accordion;
    return (_jsx("div", { className: classNames(theme.base, theme.flush[flush ? 'on' : 'off']), "data-testid": "flowbite-accordion", ...theirProps, children: panels }));
};
AccordionComponent.displayName = 'Accordion';
AccordionPanel.displayName = 'Accordion.Panel';
AccordionTitle.displayName = 'Accordion.Title';
AccordionContent.displayName = 'Accordion.Content';
export const Accordion = Object.assign(AccordionComponent, {
    Panel: AccordionPanel,
    Title: AccordionTitle,
    Content: AccordionContent,
});
