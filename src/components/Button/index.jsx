//creacion de la funcion button  usando estilos de tailwindcss



export const Button = ({ children }) => {
  return (
    <button
      className="inline-block mr-2 text-center text-lg font-semibold leading-[100%] 
        rounded-lg bg-[#81FE88] px-4 py-2 cursor-pointer 
        border-opacity-10 hover:opacity-60 transition-opacity duration-300 ease-in-out 
        text-white" // <--- Cambia el color del texto a blanco
    >
      {children}
    </button>
  );
};