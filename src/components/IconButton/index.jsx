export function IconButton ({ children, ...rest }) {
    return (
        <button className=' bg-transparent  p-4  text-white dark:text-gray-200 no-underline cursor-pointer' {...rest}>
            {children}
        </button>
    )
}