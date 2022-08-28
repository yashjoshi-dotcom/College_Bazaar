import type { ComponentProps, FC, PropsWithChildren } from 'react';
import type { FlowbitePositions, FlowbiteSizes } from '../Flowbite/FlowbiteTheme';
export interface AvatarProps extends PropsWithChildren<Omit<ComponentProps<'div'>, 'className'>> {
    alt?: string;
    bordered?: boolean;
    img?: string;
    rounded?: boolean;
    size?: keyof AvatarSizes;
    stacked?: boolean;
    status?: 'away' | 'busy' | 'offline' | 'online';
    statusPosition?: keyof FlowbitePositions;
}
export interface AvatarSizes extends Pick<FlowbiteSizes, 'xs' | 'sm' | 'md' | 'lg' | 'xl'> {
    [key: string]: string;
}
export declare const Avatar: FC<AvatarProps> & {
    Group: FC<import("./AvatarGroup").AvatarGroupProps>;
    Counter: FC<import("./AvatarGroupCounter").AvatarGroupdCounterProps>;
};
