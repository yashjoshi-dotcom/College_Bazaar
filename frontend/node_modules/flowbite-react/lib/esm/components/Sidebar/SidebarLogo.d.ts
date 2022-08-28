import type { ComponentProps, FC, PropsWithChildren } from 'react';
export interface SidebarLogoProps extends PropsWithChildren<Omit<ComponentProps<'a'>, 'className'>> {
    className?: string;
    href: string;
    img: string;
    imgAlt?: string;
}
declare const SidebarLogo: FC<SidebarLogoProps>;
export default SidebarLogo;
