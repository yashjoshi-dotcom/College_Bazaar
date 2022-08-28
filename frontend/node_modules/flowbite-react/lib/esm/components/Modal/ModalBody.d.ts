import type { ComponentProps, FC, PropsWithChildren } from 'react';
export declare type ModalBodyProps = PropsWithChildren<Omit<ComponentProps<'div'>, 'className'>>;
export declare const ModalBody: FC<ModalBodyProps>;
