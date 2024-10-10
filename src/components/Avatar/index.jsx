import Image from "next/image"
import styles from './avatar.module.css'

export const Avatar = ({name, imageSrc}) => {
    return (<ul className='m-0 p-0 list-none flex justify-end items-center gap-2 text-gray-500 text-sm font-semibold leading-150%'>
        <li>
            <Image src={imageSrc} objectFit="cover" width={32} height={32} alt={`Avatar do(a) ${name}`}/>
        </li>
        <li>
            @{name}
        </li>
    </ul>)
}



