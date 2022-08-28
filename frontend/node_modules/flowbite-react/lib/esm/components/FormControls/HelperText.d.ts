import type { ComponentProps, FC, PropsWithChildren } from 'react';
import type { FlowbiteColors } from '../Flowbite/FlowbiteTheme';
export interface HelperColors extends Pick<FlowbiteColors, 'gray' | 'info' | 'failure' | 'warning' | 'success'> {
    [key: string]: string;
}
export interface HelperTextProps extends PropsWithChildren<Omit<ComponentProps<'p'>, 'color' | 'className'>> {
    color?: keyof HelperColors;
    value?: string;
}
declare const HelperText: FC<HelperTextProps>;
export default HelperText;
