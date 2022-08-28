"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RatingAdvanced = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const exclude_1 = require("../../helpers/exclude");
const ThemeContext_1 = require("../Flowbite/ThemeContext");
const RatingAdvanced = ({ percentFilled = 0, children, ...props }) => {
    const theme = (0, ThemeContext_1.useTheme)().theme.rating.advanced;
    const theirProps = (0, exclude_1.excludeClassName)(props);
    return ((0, jsx_runtime_1.jsxs)("div", { className: theme.base, ...theirProps, children: [(0, jsx_runtime_1.jsx)("span", { className: theme.label, children: children }), (0, jsx_runtime_1.jsx)("div", { className: theme.progress.base, children: (0, jsx_runtime_1.jsx)("div", { className: theme.progress.fill, "data-testid": "flowbite-rating-fill", style: { width: `${percentFilled}%` } }) }), (0, jsx_runtime_1.jsx)("span", { className: theme.progress.label, children: `${percentFilled}%` })] }));
};
exports.RatingAdvanced = RatingAdvanced;
