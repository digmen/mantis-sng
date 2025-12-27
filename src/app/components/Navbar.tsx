import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Navbar() {
    return (
        <nav className='flex justify-between mt-[35px] mx-auto container border-secondary-color border rounded-[40px] px-[45px] py-[35px]'>
            <article className='flex items-center justify-center'>
                <Link href='/' className='font-bold text-3xl flex items-center justify-center'>Mantis</Link>
            </article>
            <article className='flex gap-[30px] items-center justify-center'>
                <Link href='/' className='text-primary-color font-semibold text-[18px] hover:text-tertiary-color transition-colors duration-300'>Главная</Link>
                <Link href='/projects' className='text-primary-color font-semibold text-[18px] hover:text-tertiary-color transition-colors duration-300'>Проекты</Link>
                <Link href='/our-service' className='text-primary-color font-semibold text-[18px] hover:text-tertiary-color transition-colors duration-300'>Наши Услуги</Link>
                <Link href='/blog' className='text-primary-color font-semibold text-[18px] hover:text-tertiary-color transition-colors duration-300'>Блог</Link>
                <Link href='/contacts' className='text-primary-color font-semibold text-[18px] hover:text-tertiary-color transition-colors duration-300'>Контакты</Link>
            </article>
            <article className='flex gap-[25px] items-center justify-center'>
                <Link href=''>
                    <Image
                        src="/assets/gmail.svg"
                        width={25}
                        height={25}
                        alt="gmail image" />
                </Link>
                <Link href=''>
                    <Image
                        src="/assets/telegram.svg"
                        width={25}
                        height={25}
                        alt='telegram image'
                    />
                </Link>
                <Link href=''>
                    <Image
                        src="/assets/whatsapp.svg"
                        width={25}
                        height={25}
                        alt='whatsapp image'
                    />
                </Link>
            </article>
        </nav>
    )
}
