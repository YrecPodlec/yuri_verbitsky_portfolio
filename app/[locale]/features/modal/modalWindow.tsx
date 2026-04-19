"use client"
import React, {ReactNode} from 'react';
import ModalWindowSkeleton from "./modalWindowSkeleton";
interface Props {
    children: ReactNode;
    button: ReactNode;
}
const ModalWindow = ({children, button}: Props) => {
    const [open, setOpen] = React.useState(false);
    return (
        <>
            <div onClick={() => setOpen(true)}>
                {button}
            </div>
            <ModalWindowSkeleton open={open} onClose={() => setOpen(false)}>
                {children}
            </ModalWindowSkeleton>
        </>
    );
};

export default ModalWindow;