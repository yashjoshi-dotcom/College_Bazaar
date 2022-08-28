import type { ComponentProps, FC, PropsWithChildren } from 'react';
export interface RatingAdvancedProps extends PropsWithChildren<Omit<ComponentProps<'div'>, 'className'>> {
    percentFilled?: number;
}
export declare const RatingAdvanced: FC<RatingAdvancedProps>;
