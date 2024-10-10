//funcion de Not-found

export function NotFound() {
    return (
        <div className="flex items-center justify-center h-screen bg-gray-200 dark:bg-gray-700">
            <img className="w-32 h-32" src={banner} alt="Not Found" />
            <Heading theme="dark">404 - Página não encontrada</Heading>
        </div>
    )
}