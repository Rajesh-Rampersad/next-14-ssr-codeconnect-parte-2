// // Comment.js
// import Image from 'next/image';
// import defaultAvatar from './defaultAvatar.png'



// export const Comment = ({ comment }) => {
//     const { text, createdAt, author } = comment;

//     // Usa la imagen importada como el avatar por defecto
//     const avatarSrc = author?.avatar || defaultAvatar;

//     return (
//         <div className="flex text-center gap-8">
//             <Image 
//                 src={avatarSrc}
//                 width={32} 
//                 height={32} 
//                 alt={author?.name ? `Avatar de ${author.name}` : 'Avatar de un usuario anónimo'} 
//                 style={{ objectFit: 'cover' }}
//             />
//             <strong>@{author?.name || 'Usuario Anónimo'}</strong>
//             <p>{text}</p>
//             <span>{new Date(createdAt).toLocaleString()}</span>
//         </div>
//     );
// };



// Comment.js
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { deepPurple  } from '@mui/material/colors';

export const Comment = ({ comment }) => {
    const { text, createdAt, author } = comment;

    // Usa la imagen del autor o un avatar por defecto
    const avatarSrc = author?.avatar;
    const avatarAlt = author?.name ? `Avatar de ${author.name}` : 'Avatar de un usuario anónimo';

    return (
        <div className="flex text-center gap-8">
            <Stack direction="row" spacing={2}>
                <Avatar
                    sx={{ bgcolor: deepPurple [500] }}
                    alt={avatarAlt}
                    src={avatarSrc || "/broken-image.jpg"} // Usa una imagen rota como fallback
                >
                    {!avatarSrc && author?.name ? author.name.charAt(0) : null} {/* Muestra la inicial del nombre si no hay avatar */}
                </Avatar>
            </Stack>
            <strong>@{author?.name || 'Usuario Anónimo'}</strong>
            <p>{text}</p>
            <span>{new Date(createdAt).toLocaleString()}</span>
        </div>
    );
};