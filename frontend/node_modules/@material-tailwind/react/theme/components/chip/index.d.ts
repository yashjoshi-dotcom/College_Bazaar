import chipFilled from "./chipFilled";
import chipGradient from "./chipGradient";
import chipCloseButtonColors from "./chipCloseButtonColors";
import type { variant, color, icon, show, dismissible, animate, className } from "../../../types/components/chip";
export interface ChipStylesType {
    defaultProps?: {
        variant?: variant;
        color?: color;
        icon?: icon;
        show?: show;
        dismissble?: dismissible;
        animate?: animate;
        className?: className;
    };
    valid?: {
        variants?: string[];
        colors?: string[];
    };
    styles?: {
        base?: object;
        variants?: {
            filled?: typeof chipFilled;
            gradient?: typeof chipGradient;
        };
        closeButtonColor?: typeof chipCloseButtonColors;
    };
}
export declare const chip: ChipStylesType;
export default chip;
//# sourceMappingURL=index.d.ts.map