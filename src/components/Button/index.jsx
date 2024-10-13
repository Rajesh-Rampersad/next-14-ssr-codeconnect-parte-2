//creacion de la funcion button  usando estilos de tailwindcss

import { Children } from "react";

export const Button = ({Children}) => {
    return (
<button className="text-[#132E35] text-center text-lg font-semibold leading-[150%] rounded-lg bg-[#81FE88] px-4 py-3 cursor-pointer border-none hover:opacity-60">
  {Children}
</button>

        );
}