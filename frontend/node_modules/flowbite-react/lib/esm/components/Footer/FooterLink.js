import { jsx as _jsx } from "react/jsx-runtime";
import { useTheme } from '../Flowbite/ThemeContext';
export const FooterLink = ({ children, href }) => {
    const theme = useTheme().theme.footer.groupLink.link;
    return (_jsx("li", { className: theme.base, children: _jsx("a", { href: href, className: theme.href, children: children }) }));
};
