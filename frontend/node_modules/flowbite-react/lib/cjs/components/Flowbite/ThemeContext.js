"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useThemeMode = exports.useTheme = exports.ThemeProvider = exports.ThemeContext = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const window_exists_1 = __importDefault(require("../../helpers/window-exists"));
const default_1 = __importDefault(require("../../theme/default"));
exports.ThemeContext = (0, react_1.createContext)({
    theme: default_1.default,
});
const ThemeProvider = ({ children, value }) => {
    return (0, jsx_runtime_1.jsx)(exports.ThemeContext.Provider, { value: value, children: children });
};
exports.ThemeProvider = ThemeProvider;
function useTheme() {
    return (0, react_1.useContext)(exports.ThemeContext);
}
exports.useTheme = useTheme;
const useThemeMode = (usePreferences) => {
    if (!usePreferences)
        return [undefined, undefined, undefined];
    const [mode, setMode] = (0, react_1.useState)(undefined);
    const savePreference = (m) => localStorage.setItem('theme', m);
    const toggleMode = () => {
        if (!mode) {
            return;
        }
        if ((0, window_exists_1.default)()) {
            document.documentElement.classList.toggle('dark');
        }
        savePreference(mode);
        setMode(mode == 'dark' ? 'light' : 'dark');
    };
    if (usePreferences) {
        (0, react_1.useEffect)(() => {
            const userPreference = (0, window_exists_1.default)() && !!window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
            const userMode = localStorage.getItem('theme') || (userPreference ? 'dark' : 'light');
            if (userMode) {
                setMode(userMode);
            }
        }, []);
        (0, react_1.useEffect)(() => {
            if (!mode) {
                return;
            }
            savePreference(mode);
            if (!(0, window_exists_1.default)()) {
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
exports.useThemeMode = useThemeMode;
