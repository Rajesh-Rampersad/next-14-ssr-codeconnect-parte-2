'use client'

import { useRef } from "react"
import { IconButton } from "../IconButton"
import { Chat } from "../icons/Chat"
import { CustomModal } from "../Modal"


export const ModalComment = () => {
    const modalRef = useRef(null)
    return (
        <>
        <CustomModal ref={modalRef}>
            <h1>Modal</h1>
            </CustomModal>
                <IconButton onClick={() => modalRef.current.openModal()}>
                    <Chat />

                </IconButton>
        </>
    )
}