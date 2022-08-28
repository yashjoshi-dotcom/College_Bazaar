import { jsx as _jsx } from "react/jsx-runtime";
import classNames from 'classnames';
import { excludeClassName } from '../../helpers/exclude';
import { useTheme } from '../Flowbite/ThemeContext';
const HelperText = ({ value, children, color = 'default', ...props }) => {
    const theme = useTheme().theme.formControls.helperText;
    const theirProps = excludeClassName(props);
    return (_jsx("p", { className: classNames(theme.base, theme.colors[color]), ...theirProps, children: value ?? children ?? '' }));
};
export default HelperText;
