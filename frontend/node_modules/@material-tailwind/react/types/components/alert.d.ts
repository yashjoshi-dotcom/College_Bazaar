import type { ReactNode } from "react";
import type { colors, animation } from "../generic";
/**
 * This file contains the types and prop-types for Alert component.
 */
export declare type variant = "filled" | "gradient";
export declare type color = colors;
export declare type icon = ReactNode;
export declare type show = boolean;
export declare type dismissible = {
    action?: ReactNode;
    onClose: () => void;
};
export declare type animate = animation;
export declare type className = string;
export declare type children = ReactNode;
export declare const propTypesVariant: any;
export declare const propTypesColor: any;
export declare const propTypesIcon: any;
export declare const propTypesShow: any;
export declare const propTypesDismissible: any;
export declare const propTypesAnimate: any;
export declare const propTypesClassName: any;
export declare const propTypesChildren: any;
//# sourceMappingURL=alert.d.ts.map