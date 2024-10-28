'use client'

import { useEffect, useState } from 'react'; // Importa el hook useState de React
import { Comment } from '../Comment'; // Importa el componente Comment
import { ReplyModal } from '../ModalReply';

// Define el componente Replies que recibe un comentario como prop
export const Replies = ({ comment }) => {
    // Crea un estado local para controlar la visibilidad de las respuestas
    const [showReplies, setShowReplies] = useState(false);
    const [replies, setReplies] = useState([]);
    const [error, setError] = useState(null); // Estado para manejar errores

    async function fetchData() {
        try {
            console.log("Fetching replies for comment ID:", comment.id); // Debugging log
            const response = await fetch(`/api/comment/${comment.id}/replies`);
            if (!response.ok) {
                // Handle 404 specifically
                if (response.status === 404) {
                    console.warn(`No replies found for comment ID: ${comment.id}`);
                    setReplies([]); // Set replies to an empty array
                    return;
                }
                throw new Error(`HTTP error! status: ${response.status}`); // Lanza un error si la respuesta no es OK
            }
            const data = await response.json();
            setReplies(data);
        } catch (error) {
            console.error("Failed to fetch replies:", error);
            setError("Failed to load replies. Please try again later."); // Configura el mensaje de error
        }
    }

    useEffect(() => {
        if (showReplies) {
            fetchData();
        }
    }, [showReplies]);

    return (
        <div className="container"> {/* Contenedor principal */}
            <div className="replies"> {/* Contenedor para las respuestas */}
                {/* Botón para mostrar u ocultar respuestas */}
                <button 
                    className="relative border-none bg-transparent cursor-pointer pl-10 text-xs font-normal"
                    onClick={() => setShowReplies(!showReplies)} // Cambia el estado al hacer clic
                >
                    {showReplies ? 'Ocultar' : 'Ver'} respuestas {/* Texto del botón cambia según el estado */}
                    {/* Línea decorativa */}
                    <div className="absolute top-1/2 left-0 transform -translate-y-1/2 w-8 h-px bg-black"></div>
                </button>
            </div>
            {/* Renderiza la lista de respuestas solo si showReplies es true */}
            {showReplies && (
                <ul className="pl-10"> {/* Lista de respuestas con padding */}
                    {error && <li className="text-red-500">{error}</li>} {/* Muestra el mensaje de error si existe */}
                    {replies.map(reply => ( // Mapea sobre las respuestas del comentario
                        <li key={reply.id}> {/* Cada respuesta es un elemento de lista con una clave única */}
                            <Comment comment={reply} /> {/* Renderiza el componente Comment para cada respuesta */}
                            <ReplyModal comment={reply} /> 
                        </li>
                    ))}                
                </ul>
            )}
        </div>
    );
};