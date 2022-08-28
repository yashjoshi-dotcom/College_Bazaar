import type { ComponentProps, FC, PropsWithChildren } from 'react';
import type { SidebarItemProps } from './SidebarItem';
export declare type SidebarCollapseProps = PropsWithChildren<ComponentProps<'button'> & SidebarItemProps>;
declare const SidebarCollapse: FC<SidebarCollapseProps>;
export default SidebarCollapse;
