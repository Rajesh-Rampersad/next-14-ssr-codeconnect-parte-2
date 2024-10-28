import Image from "next/image";
import PropTypes from 'prop-types'; // Puedes usar PropTypes para validar las props

export const Avatar = ({ name, imageSrc }) => {
    if (!name || !imageSrc) {
        return null; // O puedes renderizar un placeholder
    }

    return (
        <ul className='m-0 p-0 list-none flex justify-end items-center gap-2 text-gray-500 text-sm font-semibold leading-150%'>
            <li>
                <Image 
                    src={imageSrc} 
                    style={{ objectFit: 'cover' }}
                    width={32} 
                    height={32} 
                    alt={`Avatar of ${name || 'Anonymous User'}`} // Ensure alt text is always meaningful
                />
            </li>
            <li>
                @{name}
            </li>
        </ul>
    );
};

Avatar.defaultProps = {
    name: 'Usuario Anónimo',
    imageSrc: null,
};

Avatar.propTypes = {
    name: PropTypes.string,
    imageSrc: PropTypes.string,
};