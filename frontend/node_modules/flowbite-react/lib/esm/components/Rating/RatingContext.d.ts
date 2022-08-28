import type { StarSizes } from '.';
export declare type RatingContext = {
    size?: keyof StarSizes;
};
export declare const RatingContext: import("react").Context<RatingContext | undefined>;
export declare function useRatingContext(): RatingContext;
