'use client' // Error components must be Client Components

import { ArrowBack } from '@/components/icons/ArrowBack'
import Image from 'next/image'
import Link from 'next/link'
import { Heading } from '@/components/Heading'

import { useEffect } from 'react'

import style from './error/error.module.css'
import banner from './error/500.png'

export default function Error({
  error,
}) {
  useEffect(() => {
    if (error instanceof Error) {
      console.error(error);
    } else {
      console.error('Unexpected error type:', error);
    }
  }, [error]);

  return (
    <div className={style.container}>
      <Image src={banner} />
      <Heading>Opa! Ocorreu um erro.</Heading>
      <p className="text-black dark:text-white">Não conseguimos carregar a página, volte para seguir navegando.</p>
      <Link href="/">
        Voltar ao feed <ArrowBack color='#81FE88' />
      </Link>
    </div>
  )
}