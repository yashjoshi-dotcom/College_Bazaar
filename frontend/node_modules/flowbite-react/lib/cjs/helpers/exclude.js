"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.excludeClassName = void 0;
const excludeClassName = (props) => {
    return exclude({
        key: 'className',
        source: props,
    });
};
exports.excludeClassName = excludeClassName;
const exclude = ({ key, source }) => {
    delete source[key];
    return source;
};
exports.default = exclude;
