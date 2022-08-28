import type { ComponentProps, FC, PropsWithChildren } from 'react';
export interface BreadcrumbItemProps extends PropsWithChildren<Omit<ComponentProps<'li'>, 'className'>> {
    href?: string;
    icon?: FC<ComponentProps<'svg'>>;
}
declare const BreadcrumbItem: FC<BreadcrumbItemProps>;
export default BreadcrumbItem;
