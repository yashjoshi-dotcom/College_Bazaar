import React from "react";
import { MotionProps } from "framer-motion";
import type { variant, color, icon, show, dismissible, animate, className, children } from "../../types/components/alert";
export interface AlertProps extends Omit<MotionProps, "animate"> {
    variant?: variant;
    color?: color;
    icon?: icon;
    show?: show;
    dismissible?: dismissible;
    animate?: animate;
    className?: className;
    children: children;
}
export declare const Alert: React.ForwardRefExoticComponent<AlertProps & React.RefAttributes<HTMLDivElement>>;
export default Alert;
//# sourceMappingURL=index.d.ts.map