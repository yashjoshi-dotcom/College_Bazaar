import { jsx as _jsx } from "react/jsx-runtime";
import classNames from 'classnames';
import { excludeClassName } from '../../helpers/exclude';
import { useTheme } from '../Flowbite/ThemeContext';
import { useModalContext } from './ModalContext';
export const ModalBody = ({ children, ...props }) => {
    const { popup } = useModalContext();
    const theme = useTheme().theme.modal.body;
    const theirProps = excludeClassName(props);
    return (_jsx("div", { className: classNames(theme.base, {
            [theme.popup]: popup,
        }), ...theirProps, children: children }));
};
