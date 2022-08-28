import type { ReactElement, ReactNode } from "react";
import type { ContextData } from "@floating-ui/react-dom-interactions";
import type { colors, dismissType, animation, offsetType } from "../generic";
import type React from "react";
/**
 * This file contains the types and prop-types for Select, SelectOption and SelectContext components.
 */
export declare type variant = "standard" | "outlined" | "static";
export declare type size = "md" | "lg";
export declare type color = colors;
export declare type label = string;
export declare type error = boolean;
export declare type success = boolean;
export declare type arrow = ReactNode;
export declare type value = string;
export declare type onChange = (value: ReactNode) => void;
export declare type selected = (element?: ReactElement, index?: number) => React.ReactNode;
export declare type offset = offsetType;
export declare type dismiss = dismissType;
export declare type animate = animation;
export declare type autoHeight = boolean;
export declare type lockScroll = boolean;
export declare type labelProps = {
    [key: string]: any;
};
export declare type menuProps = {
    [key: string]: any;
};
export declare type index = number;
export declare type disabled = boolean;
export declare type className = string;
export declare type children = ReactNode;
export declare type contextValue = {
    selectedIndex: number;
    setSelectedIndex: (index: number) => void;
    activeIndex?: number | null;
    setActiveIndex: (index: number | null) => void;
    listRef: React.MutableRefObject<Array<HTMLLIElement | null>>;
    setOpen: (open: boolean) => void;
    onChange: (value: string) => void;
    getItemProps: (userProps?: React.HTMLProps<HTMLElement>) => any;
    dataRef: ContextData;
};
export declare const propTypesVariant: any;
export declare const propTypesSize: any;
export declare const propTypesColor: any;
export declare const propTypesLabel: any;
export declare const propTypesError: any;
export declare const propTypesSuccess: any;
export declare const propTypesArrow: any;
export declare const propTypesValue: any;
export declare const propTypesOnChange: any;
export declare const propTypesSelected: any;
export declare const propTypesOffset: any;
export declare const propTypesDismiss: any;
export declare const propTypesAnimate: any;
export declare const propTypesAutoHeight: any;
export declare const propTypesLockScroll: any;
export declare const propTypesLabelProps: any;
export declare const propTypesMenuProps: any;
export declare const propTypesIndex: any;
export declare const propTypesDisabled: any;
export declare const propTypesClassName: any;
export declare const propTypesChildren: any;
export declare const propTypesContextValue: any;
//# sourceMappingURL=select.d.ts.map