import type { ReactNode } from "react";
import type { FloatingContext, Placement, ReferenceType, Strategy } from "@floating-ui/react-dom-interactions";
import type { dismissType, animation, offsetType } from "../generic";
/**
 * This file contains the types and prop-types for Popover, PopoverHandler, PopoverContent, PopoverContext and Tooltip components.
 */
export declare type open = boolean;
export declare type handler = React.Dispatch<React.SetStateAction<any>>;
export declare type placement = Placement;
export declare type offset = offsetType;
export declare type dismiss = dismissType;
export declare type animate = animation;
export declare type content = ReactNode;
export declare type contextValue = {
    open: open;
    strategy: Strategy;
    x?: number;
    y?: number;
    context: FloatingContext<ReferenceType>;
    reference: (node: HTMLElement) => void;
    floating: (node: HTMLElement) => void;
    getReferenceProps: (userProps?: React.HTMLProps<Element>) => any;
    getFloatingProps: (userProps?: React.HTMLProps<HTMLElement>) => any;
    appliedAnimation: animate;
    labelId: string;
    descriptionId: string;
};
export declare type interactive = boolean;
export declare type className = string;
export declare type children = ReactNode;
export declare const propTypesOpen: any;
export declare const propTypesHandler: any;
export declare const propTypesPlacement: any;
export declare const propTypesOffset: any;
export declare const propTypesDismiss: any;
export declare const propTypesAnimate: any;
export declare const propTypesContent: any;
export declare const propTypesInteractive: any;
export declare const propTypesClassName: any;
export declare const propTypesChildren: any;
export declare const propTypesContextValue: any;
//# sourceMappingURL=popover.d.ts.map