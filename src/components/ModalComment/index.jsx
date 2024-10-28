'use client'

import { useRef } from "react"
import { IconButton } from "../IconButton"
import { CustomModal } from "../Modal"
import { Chat } from "../icons/Chat"
import { Textarea } from "../Textarea"
import { SubmitButton } from "../SubmitButton"
import { Subheading } from "../Subheading/Subheading"


export const ModalComment = ({ action }) => {
    const modalRef = useRef(null)
    return (
        <>
            <CustomModal ref={modalRef}>
                <form action={action} onSubmit={() => modalRef.current.closeModal()}>
                   <Subheading>Deixe seu comentário sobre o post:</Subheading>
                    <Textarea required rows={8} name="text" placeholder="Digite aqui..." />
                    <div >
                        <SubmitButton>
                            Comentar
                        </SubmitButton>
                    </div>
                </form>
            </CustomModal>
            <IconButton
                onClick={() => modalRef.current.openModal()}
            >
                <Chat />
            </IconButton>
        </>
    )
}