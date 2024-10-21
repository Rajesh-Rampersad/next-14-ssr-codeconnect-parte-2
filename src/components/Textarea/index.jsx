export const Textarea = ({ children, ...rest}) => {
    return (
        <textarea
            className="w-full rounded-lg bg-[#BCBCBC] p-4 text-[#3E3E3F] text-lg font-normal"
            {...rest}
        >
            {children}
        </textarea>
    )
}