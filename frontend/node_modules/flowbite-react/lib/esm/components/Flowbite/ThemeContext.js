import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useContext, useEffect, useState } from 'react';
import windowExists from '../../helpers/window-exists';
import defaultTheme from '../../theme/default';
export const ThemeContext = createContext({
    theme: defaultTheme,
});
export const ThemeProvider = ({ children, value }) => {
    return _jsx(ThemeContext.Provider, { value: value, children: children });
};
export function useTheme() {
    return useContext(ThemeContext);
}
export const useThemeMode = (usePreferences) => {
    if (!usePreferences)
        return [undefined, undefined, undefined];
    const [mode, setMode] = useState(undefined);
    const savePreference = (m) => localStorage.setItem('theme', m);
    const toggleMode = () => {
        if (!mode) {
            return;
        }
        if (windowExists()) {
            document.documentElement.classList.toggle('dark');
        }
        savePreference(mode);
        setMode(mode == 'dark' ? 'light' : 'dark');
    };
    if (usePreferences) {
        useEffect(() => {
            const userPreference = windowExists() && !!window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
            const userMode = localStorage.getItem('theme') || (userPreference ? 'dark' : 'light');
            if (userMode) {
                setMode(userMode);
            }
        }, []);
        useEffect(() => {
            if (!mode) {
                return;
            }
            savePreference(mode);
            if (!windowExists()) {
                return;
            }
            if (mode != 'dark') {
                document.documentElement.classList.remove('dark');
            }
            else {
                document.documentElement.classList.add('dark');
            }
        }, [mode]);
    }
    return [mode, setMode, toggleMode];
};
