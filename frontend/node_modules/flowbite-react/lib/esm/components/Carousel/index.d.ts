import type { ComponentProps, FC, PropsWithChildren, ReactNode } from 'react';
export interface CarouselProps extends PropsWithChildren<ComponentProps<'div'>> {
    indicators?: boolean;
    leftControl?: ReactNode;
    rightControl?: ReactNode;
    slide?: boolean;
    slideInterval?: number;
}
export declare const Carousel: FC<CarouselProps>;
