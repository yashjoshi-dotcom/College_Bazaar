import type { ComponentProps, FC, PropsWithChildren } from 'react';
import type { ButtonProps } from '.';
export declare type ButtonGroupProps = PropsWithChildren<ComponentProps<'div'> & Pick<ButtonProps, 'outline' | 'pill'>>;
export interface PositionInButtonGroup {
    none: string;
    start: string;
    middle: string;
    end: string;
}
declare const ButtonGroup: FC<ButtonGroupProps>;
export default ButtonGroup;
