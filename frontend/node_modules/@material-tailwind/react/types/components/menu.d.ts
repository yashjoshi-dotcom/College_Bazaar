import type { ReactNode } from "react";
import type { Placement, Strategy, FloatingContext, ReferenceType } from "@floating-ui/react-dom-interactions";
import type { dismissType, animation, offsetType } from "../generic";
/**
 * This file contains the types and prop-types for Menu and Menu, MenuCore, MenuHandler, MenuList, MenuItem and MenuContext components.
 */
export declare type open = boolean;
export declare type handler = React.Dispatch<React.SetStateAction<any>>;
export declare type placement = Placement;
export declare type offset = offsetType;
export declare type dismiss = dismissType;
export declare type animate = animation;
export declare type lockScroll = boolean;
export declare type disabled = boolean;
export declare type className = string;
export declare type children = ReactNode;
export declare type contextValue = {
    open: open;
    handler: handler;
    setInternalOpen: handler;
    strategy: Strategy;
    x: number;
    y: number;
    reference: (node: HTMLElement) => void;
    floating: (node: HTMLElement) => void;
    listItemsRef: React.MutableRefObject<any[]>;
    getReferenceProps: (userProps?: React.HTMLProps<Element>) => any;
    getFloatingProps: (userProps?: React.HTMLProps<HTMLElement>) => any;
    getItemProps: (userProps?: React.HTMLProps<HTMLElement>) => any;
    appliedAnimation: animate;
    lockScroll: boolean;
    context: FloatingContext<ReferenceType>;
};
export declare const propTypesOpen: any;
export declare const propTypesHandler: any;
export declare const propTypesPlacement: any;
export declare const propTypesOffset: any;
export declare const propTypesDismiss: any;
export declare const propTypesAnimate: any;
export declare const propTypesLockScroll: any;
export declare const propTypesDisabled: any;
export declare const propTypesClassName: any;
export declare const propTypesChildren: any;
export declare const propTypesContextValue: any;
//# sourceMappingURL=menu.d.ts.map