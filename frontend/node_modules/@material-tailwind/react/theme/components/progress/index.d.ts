import progressFilled from "./progressFilled";
import progressGradient from "./progressGradient";
import type { variant, color, value, label, barProps, className } from "../../../types/components/progress";
export interface ProgressStylesType {
    defaultProps?: {
        variant?: variant;
        color?: color;
        value?: value;
        label?: label;
        barProps?: barProps;
        className?: className;
    };
    valid: {
        variants?: string[];
        colors?: string[];
    };
    styles?: {
        base?: {
            container?: {
                initial?: object;
                withLabel?: object;
            };
            bar?: object;
        };
        variants?: {
            filled?: typeof progressFilled;
            gradient?: typeof progressGradient;
        };
    };
}
export declare const progress: ProgressStylesType;
export default progress;
//# sourceMappingURL=index.d.ts.map