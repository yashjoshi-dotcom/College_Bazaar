import type { ComponentProps, FC } from 'react';
export interface FooterProps extends Omit<ComponentProps<'footer'>, 'className'> {
    bgDark?: boolean;
    container?: boolean;
}
export declare const FooterComponent: FC<FooterProps>;
export declare const Footer: FC<FooterProps> & {
    Copyright: FC<import("./FooterCopyright").CopyrightProps>;
    Link: FC<import("./FooterLink").FooterLinkProps>;
    LinkGroup: FC<import("./FooterLinkGroup").FooterLinkGroupProps>;
    Brand: FC<import("./FooterBrand").FooterBrandProps>;
    Icon: FC<import("./FooterIcon").FooterIconProps>;
    Title: FC<import("./FooterTitle").FooterTitleProps>;
    Divider: FC<{}>;
};
