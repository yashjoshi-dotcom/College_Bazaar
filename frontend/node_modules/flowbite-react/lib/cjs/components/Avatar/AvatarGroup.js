"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const AvatarGroup = ({ children }) => {
    return ((0, jsx_runtime_1.jsx)("div", { "data-testid": "avatar-group-element", className: "mb-5 flex -space-x-4", children: children }));
};
AvatarGroup.displayName = 'Avatar.Group';
exports.default = AvatarGroup;
