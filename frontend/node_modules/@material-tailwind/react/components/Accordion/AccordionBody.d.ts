import React from "react";
import { MotionProps } from "framer-motion";
import type { className, children } from "../../types/components/accordion";
export interface AccordionBodyProps extends MotionProps {
    className?: className;
    children: children;
}
export declare const AccordionBody: React.ForwardRefExoticComponent<AccordionBodyProps & React.RefAttributes<HTMLDivElement>>;
export default AccordionBody;
//# sourceMappingURL=AccordionBody.d.ts.map