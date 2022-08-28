import { jsx as _jsx } from "react/jsx-runtime";
import { excludeClassName } from '../../helpers/exclude';
import { useTheme } from '../Flowbite/ThemeContext';
import { useAccordionContext } from './AccordionPanelContext';
export const AccordionContent = ({ children, ...props }) => {
    const theirProps = excludeClassName(props);
    const { isOpen } = useAccordionContext();
    const theme = useTheme().theme.accordion.content;
    return (_jsx("div", { className: theme.base, "data-testid": "flowbite-accordion-content", hidden: !isOpen, ...theirProps, children: children }));
};
