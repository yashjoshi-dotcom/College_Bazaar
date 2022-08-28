import React from "react";
import type { open, handler, placement, offset, dismiss, animate, lockScroll, children } from "../../types/components/menu";
export interface MenuProps {
    open?: open;
    handler?: handler;
    placement?: placement;
    offset?: offset;
    dismiss?: dismiss;
    animate?: animate;
    lockScroll?: lockScroll;
    children: children;
}
export declare const MenuCore: React.ForwardRefExoticComponent<MenuProps & React.RefAttributes<HTMLDivElement>>;
export default MenuCore;
//# sourceMappingURL=MenuCore.d.ts.map