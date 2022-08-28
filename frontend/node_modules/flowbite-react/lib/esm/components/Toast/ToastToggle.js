import { jsx as _jsx } from "react/jsx-runtime";
import { HiX } from 'react-icons/hi';
import { useTheme } from '../Flowbite/ThemeContext';
import { useToastContext } from './ToastContext';
export const ToastToggle = ({ xIcon: XIcon = HiX }) => {
    const { duration, isClosed, isRemoved, setIsClosed, setIsRemoved } = useToastContext();
    const theme = useTheme().theme.toast.toggle;
    const handleClick = () => {
        setIsClosed(!isClosed);
        setTimeout(() => setIsRemoved(!isRemoved), duration);
    };
    return (_jsx("button", { "aria-label": "Close", onClick: handleClick, type: "button", className: theme.base, children: _jsx(XIcon, { className: theme.icon }) }));
};
