import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import classNames from 'classnames';
import { HiOutlineX } from 'react-icons/hi';
import { excludeClassName } from '../../helpers/exclude';
import { useTheme } from '../Flowbite/ThemeContext';
import { useModalContext } from './ModalContext';
export const ModalHeader = ({ children, ...props }) => {
    const { popup, onClose } = useModalContext();
    const theme = useTheme().theme.modal.header;
    const theirProps = excludeClassName(props);
    return (_jsxs("div", { className: classNames(theme.base, {
            [theme.popup]: popup,
        }), ...theirProps, children: [_jsx("h3", { className: theme.title, children: children }), _jsx("button", { "aria-label": "Close", className: theme.close.base, type: "button", onClick: onClose, children: _jsx(HiOutlineX, { "aria-hidden": true, className: theme.close.icon }) })] }));
};
