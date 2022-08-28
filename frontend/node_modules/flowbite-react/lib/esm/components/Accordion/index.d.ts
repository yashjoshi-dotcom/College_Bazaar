import type { ComponentProps, FC, PropsWithChildren, ReactElement } from 'react';
import type { AccordionPanelProps } from './AccordionPanel';
export interface AccordionProps extends PropsWithChildren<Omit<ComponentProps<'div'>, 'className'>> {
    alwaysOpen?: boolean;
    arrowIcon?: FC<ComponentProps<'svg'>>;
    children: ReactElement<AccordionPanelProps> | ReactElement<AccordionPanelProps>[];
    flush?: boolean;
}
export declare const Accordion: FC<AccordionProps> & {
    Panel: FC<AccordionPanelProps>;
    Title: FC<import("./AccordionTitle").AccordionTitleProps>;
    Content: FC<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>>;
};
