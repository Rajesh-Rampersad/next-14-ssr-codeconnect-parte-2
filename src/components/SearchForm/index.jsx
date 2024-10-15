//creacion de un searchForm con tailwindcss

import { Search } from 'lucide-react';
import { Button } from "../Button";

export const SearchForm = () => {
    return (
      <form className="flex w-full max-w-full gap-4 mb-6" action="/">

        <div className="flex justify-start grow">
          <Search className="w-6 h-6 text-[#E0E0E0] dark:text-[#F0F0F0] mr-2 " />
          <input
            name="q"
            className="flex-grow rounded-lg bg-[#1E2729] dark:bg-gray-700  
                px-4 py-1 
                text-[#E0E0E0] dark:text-[#F0F0F0] 
                text-lg font-normal leading-relaxed
                transition-colors duration-300 ease-in-out"
            type="text"
            placeholder="Digite o que você procura"
          />
        </div>
        <div className="justify-end">
          <Button>
            Buscar
          </Button>
        </div>
      </form>
    );
  };


//   export const SearchForm = () => {
//     return (
//       <form className="flex w-full max-w-full mb-6" action="/">
//         <div className="flex justify-start grow">
//           <Search className="w-6 h-6 text-[#E0E0E0] dark:text-[#F0F0F0] mr-2 " />
//           <input
//             name="q"
//             className="flex-grow rounded-lg bg-[#1E2729] dark:bg-gray-700  
//               px-4 py-1 
//               text-[#E0E0E0] dark:text-[#F0F0F0] 
//               text-lg font-normal leading-relaxed
//               transition-colors duration-300 ease-in-out"
//             type="text"
//             placeholder="Digite o que você procura"
//           />
//         </div>
//         <div className="justify-end">
//           <Button>
//             Buscar
//           </Button>
//         </div>
//       </form>
//     );
//   };