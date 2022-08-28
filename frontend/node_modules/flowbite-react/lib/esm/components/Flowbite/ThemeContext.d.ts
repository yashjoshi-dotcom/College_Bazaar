import type { FC, ReactNode } from 'react';
import type { FlowbiteTheme } from './FlowbiteTheme';
export declare type Mode = string | undefined | 'light' | 'dark';
interface ThemeContextProps {
    theme: FlowbiteTheme;
    mode?: Mode;
    toggleMode?: () => void | null;
}
export declare const ThemeContext: import("react").Context<ThemeContextProps>;
interface ThemeProviderProps {
    children: ReactNode;
    value: ThemeContextProps;
}
export declare const ThemeProvider: FC<ThemeProviderProps>;
export declare function useTheme(): ThemeContextProps;
export declare const useThemeMode: (usePreferences: boolean) => [Mode, React.Dispatch<React.SetStateAction<Mode>> | undefined, (() => void) | undefined];
export {};
