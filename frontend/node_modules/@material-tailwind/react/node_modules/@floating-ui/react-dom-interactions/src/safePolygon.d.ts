import type { FloatingContext, FloatingTreeType, ReferenceType } from './types';
export declare function safePolygon<RT extends ReferenceType = ReferenceType>({ restMs, buffer, debug, }?: Partial<{
    restMs: number;
    buffer: number;
    debug: null | ((points?: string | null) => void);
}>): ({ x, y, placement, refs, onClose, nodeId, tree, leave, }: FloatingContext<RT> & {
    onClose: () => void;
    tree?: FloatingTreeType<RT> | null | undefined;
    leave?: boolean | undefined;
}) => (event: PointerEvent) => void;
