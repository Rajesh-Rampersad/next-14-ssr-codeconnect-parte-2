import Image from 'next/image'
import logo from './logo.png'
import Link from 'next/link'

export const Aside = () => {
    return (
        <aside className='rounded-md bg-white dark:bg-[#171D1F] text-black dark:text-white p-8 p-x-4 h-full'>
            <Link href='/'>
            <Image 
                src={logo}
                width={200}
                height={100}
                alt="Logo da Code Connect"
            />
            </Link>
        </aside>
    )
}
