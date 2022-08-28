import type { ComponentProps, FC, PropsWithChildren } from 'react';
import type { FlowbitePositions, FlowbiteSizes } from '../Flowbite/FlowbiteTheme';
export interface ModalPositions extends FlowbitePositions {
    [key: string]: string;
}
export interface ModalSizes extends Omit<FlowbiteSizes, 'xs'> {
    [key: string]: string;
}
export interface ModalProps extends PropsWithChildren<Omit<ComponentProps<'div'>, 'className'>> {
    onClose?: () => void;
    position?: keyof ModalPositions;
    popup?: boolean;
    root?: HTMLElement;
    show?: boolean;
    size?: keyof ModalSizes;
}
export declare const Modal: FC<ModalProps> & {
    Header: FC<import("./ModalHeader").ModalHeaderProps>;
    Body: FC<import("./ModalBody").ModalBodyProps>;
    Footer: FC<import("./ModalFooter").ModalFooterProps>;
};
