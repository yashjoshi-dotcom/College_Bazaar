import { ComponentProps, FC, PropsWithChildren } from 'react';
export interface SidebarProps extends PropsWithChildren<Omit<ComponentProps<'div'>, 'className'>> {
    collapseBehavior?: 'collapse' | 'hide';
    collapsed?: boolean;
}
export declare const Sidebar: FC<SidebarProps> & {
    Collapse: FC<import("./SidebarCollapse").SidebarCollapseProps>;
    CTA: FC<import("./SidebarCTA").SidebarCTAProps>;
    Item: FC<import("./SidebarItem").SidebarItemProps>;
    Items: FC<PropsWithChildren<Omit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "className">>>;
    ItemGroup: FC<PropsWithChildren<Omit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLUListElement>, HTMLUListElement>, "className">>>;
    Logo: FC<import("./SidebarLogo").SidebarLogoProps>;
};
