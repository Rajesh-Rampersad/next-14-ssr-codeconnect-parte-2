//creacion de la funcion Modal para que el usuario deje su comentario.

import { forwardRef, useRef } from "react";

export function Modal = forwardRef(({ children, ref }) =>{
    const dialogRef = useRef(null)
    
    return (
        <dialog ref={dialogRef}>
        </dialog>
    )
})          