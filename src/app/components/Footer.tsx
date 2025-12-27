import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Footer() {
    return (
        <footer className='bg-primary-color text-white py-[47px] px-[77px] flex justify-between mt-[115px]'>
            <article>
                <h1 className='text-[50px] font-bold leading-10'>MANTIS STUDIO</h1>
            </article>
            <article className='flex flex-col gap-[18px]'>
                <Link href='/' className='text-[20] font-light hover:text-tertiary-color transition-colors duration-300'>Главная</Link>
                <Link href='/' className='text-[20] font-light hover:text-tertiary-color transition-colors duration-300'>Услуги</Link>
                <Link href='/' className='text-[20] font-light hover:text-tertiary-color transition-colors duration-300'>Почему мы</Link>
                <Link href='/' className='text-[20] font-light hover:text-tertiary-color transition-colors duration-300'>Цены</Link>
            </article>
            <article className='flex flex-col gap-[18px]'>
                <Link href='/' className='text-[20] font-light hover:text-tertiary-color transition-colors duration-300'>Мобильное приложение</Link>
                <Link href='/' className='text-[20] font-light hover:text-tertiary-color transition-colors duration-300'>Корпоративный сайт</Link>
                <Link href='/' className='text-[20] font-light hover:text-tertiary-color transition-colors duration-300'>Landing page</Link>
                <Link href='/' className='text-[20] font-light hover:text-tertiary-color transition-colors duration-300'>Интернет магазин</Link>
            </article>
            <article className='flex flex-col gap-4'>
                <section className='flex gap-6'>
                    <Link href=''>
                        <Image
                            src="/assets/instagramcolored.svg"
                            width={30}
                            height={30}
                            alt="gmail image" />
                    </Link>
                    <Link href=''>
                        <Image
                            src="/assets/facebookcolored.svg"
                            width={30}
                            height={30}
                            alt='telegram image'
                        />
                    </Link>
                    <Link href=''>
                        <Image
                            src="/assets/whatsappcolored.svg"
                            width={30}
                            height={30}
                            alt='whatsapp image'
                        />
                    </Link>
                </section>
                <section>
                    <a href='#' className='flex gap-1.5 text-[20] font-light hover:text-tertiary-color transition-colors duration-300'>
                        <Image
                            src="/assets/phone.svg"
                            width={25}
                            height={25}
                            alt='whatsapp image'
                        />
                        +996 507 023 651
                    </a>
                </section>
            </article>
        </footer>
    )
}
