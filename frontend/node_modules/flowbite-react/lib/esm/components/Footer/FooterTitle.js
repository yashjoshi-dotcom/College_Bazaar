import { jsx as _jsx } from "react/jsx-runtime";
import { useTheme } from '../Flowbite/ThemeContext';
export const FooterTitle = ({ title }) => {
    const theme = useTheme().theme.footer.title;
    return (_jsx("h2", { "data-testid": "flowbite-footer-title", className: theme.base, children: title }));
};
