import radioColors from "./radioColors";
import type { color, label, icon, ripple, className, containerProps, labelProps } from "../../../types/components/checkbox";
export interface RadioStylesType {
    defaultProps?: {
        color?: color;
        label?: label;
        icon?: icon;
        ripple?: ripple;
        className?: className;
        containerProps?: containerProps;
        labelProps?: labelProps;
    };
    valid?: {
        colors?: string[];
    };
    styles?: {
        base?: {
            root?: object;
            container?: object;
            input?: object;
            label?: object;
        };
        colors: typeof radioColors;
    };
}
export declare const radio: RadioStylesType;
export default radio;
//# sourceMappingURL=index.d.ts.map