import type { variant, size, className } from "../../../types/components/avatar";
export interface AvatarStyleTypes {
    defaultProps?: {
        variant?: variant;
        size?: size;
        className?: className;
    };
    valid?: {
        variants?: string[];
        sizes?: string[];
    };
    styles?: {
        base?: object;
        sizes?: {
            xs?: object;
            sm?: object;
            md?: object;
            lg?: object;
            xl?: object;
            xxl?: object;
        };
        variants?: {
            rounded?: object;
            circular?: object;
        };
    };
}
export declare const avatar: AvatarStyleTypes;
export default avatar;
//# sourceMappingURL=index.d.ts.map