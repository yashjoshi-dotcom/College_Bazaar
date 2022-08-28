"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListGroup = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const exclude_1 = require("../../helpers/exclude");
const ThemeContext_1 = require("../Flowbite/ThemeContext");
const ListGroupItem_1 = require("./ListGroupItem");
const ListGroupComponent = ({ children, ...props }) => {
    const theirProps = (0, exclude_1.excludeClassName)(props);
    const theme = (0, ThemeContext_1.useTheme)().theme.listGroup.base;
    return ((0, jsx_runtime_1.jsx)("ul", { className: theme, ...theirProps, children: children }));
};
ListGroupComponent.displayName = 'ListGroup';
ListGroupItem_1.ListGroupItem.displayName = 'ListGroup.Item';
exports.ListGroup = Object.assign(ListGroupComponent, { Item: ListGroupItem_1.ListGroupItem });
