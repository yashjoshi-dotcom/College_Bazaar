"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rating = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const exclude_1 = require("../../helpers/exclude");
const ThemeContext_1 = require("../Flowbite/ThemeContext");
const RatingAdvanced_1 = require("./RatingAdvanced");
const RatingContext_1 = require("./RatingContext");
const RatingStar_1 = require("./RatingStar");
const RatingComponent = ({ children, size = 'sm', ...props }) => {
    const theme = (0, ThemeContext_1.useTheme)().theme.rating;
    const theirProps = (0, exclude_1.excludeClassName)(props);
    return ((0, jsx_runtime_1.jsx)(RatingContext_1.RatingContext.Provider, { value: { size }, children: (0, jsx_runtime_1.jsx)("div", { className: theme.base, ...theirProps, children: children }) }));
};
RatingComponent.displayName = 'Rating';
RatingStar_1.RatingStar.displayName = 'Rating.Star';
RatingAdvanced_1.RatingAdvanced.displayName = 'Rating.Advanced';
exports.Rating = Object.assign(RatingComponent, {
    Star: RatingStar_1.RatingStar,
    Advanced: RatingAdvanced_1.RatingAdvanced,
});
