import React from "react";
import type { variant, color, textGradient, asType, className, children } from "../../types/components/typography";
export interface TypographyProps extends React.ComponentProps<any> {
    variant?: variant;
    color?: color;
    textGradient?: textGradient;
    as?: asType;
    className?: className;
    children: children;
}
export declare const Typography: React.ForwardRefExoticComponent<Pick<TypographyProps, keyof TypographyProps> & React.RefAttributes<HTMLElement>>;
export default Typography;
//# sourceMappingURL=index.d.ts.map