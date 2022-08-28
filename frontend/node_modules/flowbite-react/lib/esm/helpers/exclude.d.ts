import type { PropsWithChildren } from 'react';
export interface ExcludeProps {
    key: string;
    source: Record<string, unknown>;
}
export declare const excludeClassName: (props: PropsWithChildren<object>) => object;
declare const exclude: ({ key, source }: ExcludeProps) => object;
export default exclude;
