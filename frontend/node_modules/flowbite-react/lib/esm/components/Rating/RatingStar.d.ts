import type { ComponentProps, FC } from 'react';
export interface RatingStarProps {
    filled?: boolean;
    starIcon?: FC<ComponentProps<'svg'>>;
}
export declare const RatingStar: FC<RatingStarProps>;
