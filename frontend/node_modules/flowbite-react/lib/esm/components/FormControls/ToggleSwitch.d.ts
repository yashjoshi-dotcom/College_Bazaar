import type { ComponentProps, FC } from 'react';
export declare type ToggleSwitchProps = Omit<ComponentProps<'button'>, 'onChange' | 'className'> & {
    checked: boolean;
    label: string;
    onChange: (checked: boolean) => void;
};
export declare const ToggleSwitch: FC<ToggleSwitchProps>;
