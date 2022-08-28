import { jsx as _jsx } from "react/jsx-runtime";
import { useTheme } from '../Flowbite/ThemeContext';
export const FooterIcon = ({ href, ariaLabel, icon: Icon }) => {
    const theme = useTheme().theme.footer.icon;
    return (_jsx("div", { children: href ? (_jsx("a", { "aria-label": ariaLabel, "data-testid": "flowbite-footer-icon", href: href, className: theme.base, children: _jsx(Icon, { className: theme.size }) })) : (_jsx(Icon, { "data-testid": "flowbite-footer-icon", className: theme.size })) }));
};
