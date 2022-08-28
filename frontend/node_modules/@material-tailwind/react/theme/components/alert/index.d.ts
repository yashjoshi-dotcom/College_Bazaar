import alertFilled from "./alertFilled";
import alertGradient from "./alertGradient";
import type { variant, color, icon, show, dismissible, animate, className } from "../../../types/components/alert";
export interface AlertStylesType {
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
            filled?: typeof alertFilled;
            gradient?: typeof alertGradient;
        };
    };
}
export declare const alert: AlertStylesType;
export default alert;
//# sourceMappingURL=index.d.ts.map