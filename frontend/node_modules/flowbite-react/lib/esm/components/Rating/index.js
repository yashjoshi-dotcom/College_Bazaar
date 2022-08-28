import { jsx as _jsx } from "react/jsx-runtime";
import { excludeClassName } from '../../helpers/exclude';
import { useTheme } from '../Flowbite/ThemeContext';
import { RatingAdvanced } from './RatingAdvanced';
import { RatingContext } from './RatingContext';
import { RatingStar } from './RatingStar';
const RatingComponent = ({ children, size = 'sm', ...props }) => {
    const theme = useTheme().theme.rating;
    const theirProps = excludeClassName(props);
    return (_jsx(RatingContext.Provider, { value: { size }, children: _jsx("div", { className: theme.base, ...theirProps, children: children }) }));
};
RatingComponent.displayName = 'Rating';
RatingStar.displayName = 'Rating.Star';
RatingAdvanced.displayName = 'Rating.Advanced';
export const Rating = Object.assign(RatingComponent, {
    Star: RatingStar,
    Advanced: RatingAdvanced,
});
