'use client'

import { useRef } from "react"
import { IconButton } from "../IconButton"
import { CustomModal } from "../Modal"
import { Textarea } from "../Textarea"
import { SubmitButton } from "../SubmitButton"
import { postReply } from "@/actions"
import { Comment } from "../Comment"



export const ReplyModal = ({ comment, post }) => {
    const modalRef = useRef(null)
    const action = postReply.bind(null, comment)
    return (
        <>
            <CustomModal ref={modalRef}>
                <form action={action} >
                   <div className="mb-4">
                        <Comment comment={comment}/>
                   </div>

                   <div className="mb-4">
                     <Textarea required rows={8} name="text" placeholder="Digite aqui..." />
                    </div>

                    <div className="flex justify-end mb-4">
                        <SubmitButton className="text-black text-sm font-semibold bg-transparent border-0 cursor-pointer my-2">
                            Responder
                        </SubmitButton>
                    </div>

                </form>
            </CustomModal>

            <IconButton
                onClick={() => modalRef.current.openModal()}
            >
               Responder
            </IconButton>
        </>
    )
}