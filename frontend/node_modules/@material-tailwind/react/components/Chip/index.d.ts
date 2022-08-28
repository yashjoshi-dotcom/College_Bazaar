import React from "react";
import { MotionProps } from "framer-motion";
import type { variant, color, icon, show, dismissible, animate, className, value } from "../../types/components/chip";
export interface ChipProps extends Omit<MotionProps, "animate"> {
    variant?: variant;
    color?: color;
    icon?: icon;
    show?: show;
    dismissible?: dismissible;
    animate?: animate;
    className?: className;
    value: value;
}
export declare const Chip: React.ForwardRefExoticComponent<ChipProps & React.RefAttributes<HTMLDivElement>>;
export default Chip;
//# sourceMappingURL=index.d.ts.map