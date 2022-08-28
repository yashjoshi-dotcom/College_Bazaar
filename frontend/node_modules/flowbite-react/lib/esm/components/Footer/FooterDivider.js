import { jsx as _jsx } from "react/jsx-runtime";
import { useTheme } from '../Flowbite/ThemeContext';
export const FooterDivider = () => {
    const theme = useTheme().theme.footer.divider;
    return _jsx("hr", { "data-testid": "footer-divider", className: theme.base });
};
