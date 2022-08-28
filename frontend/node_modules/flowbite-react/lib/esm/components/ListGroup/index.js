import { jsx as _jsx } from "react/jsx-runtime";
import { excludeClassName } from '../../helpers/exclude';
import { useTheme } from '../Flowbite/ThemeContext';
import { ListGroupItem } from './ListGroupItem';
const ListGroupComponent = ({ children, ...props }) => {
    const theirProps = excludeClassName(props);
    const theme = useTheme().theme.listGroup.base;
    return (_jsx("ul", { className: theme, ...theirProps, children: children }));
};
ListGroupComponent.displayName = 'ListGroup';
ListGroupItem.displayName = 'ListGroup.Item';
export const ListGroup = Object.assign(ListGroupComponent, { Item: ListGroupItem });
