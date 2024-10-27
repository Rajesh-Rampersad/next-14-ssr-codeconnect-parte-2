// //funcion de Not-found

// import { Heading } from "@/components/Heading";

// const NotFound = () => {
//     return (
//         <div className="flex items-center justify-center h-screen bg-gray-200 dark:bg-gray-700">
//             <img className="w-32 h-32"  alt="Not Found" />
//             <Heading theme="dark">404 - Página não encontrada</Heading>
//         </div>
//     )
// }
// export default NotFound; //exportando a função para ser usada em outro arquivo


import { Heading } from "@/components/Heading";
import { ArrowBack } from "@/components/icons/ArrowBack";
import Image from "next/image";
import Link from "next/link";
import banner from './error/404.png';

export default function NotFound() {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-white dark:bg-gray-700 text-center">
      {/* Imagen que ocupa el 95% del contenedor */}
      <div className="w-[95%] max-w-xl">
        <Image
          src={banner}
          alt="Erro 404 - Página não encontrada"
          className=" text-black dark:text-white w-full object-contain"
        />
      </div>

      {/* Título de la página */}
      <Heading theme='dark' className="text-2xl mt-8">
        Opa! Ocorreu um erro.
      </Heading>

      {/* Mensaje de error */}
      <p className="mt-4 text-black dark:text-white text-lg">
        Não conseguimos carregar a página, volte para seguir navegando.
      </p>

      {/* Enlace para volver al feed */}
      <Link href="/" className="mt-6 text-[#81FE88] flex items-center gap-2 text-lg font-semibold">
        Voltar ao feed
        <ArrowBack color='#81FE88' />
      </Link>
    </div>
  );
}
