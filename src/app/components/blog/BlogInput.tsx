import { Inter } from 'next/font/google'
import React from 'react'

const inter = Inter({
    subsets: ['latin'],
    display: 'swap',
})


export default function BlogInput() {
    return (
        <article className='flex flex-col gap-4'>
            <h1 className={`${inter.className} text-center text-primary-color text-2xl font-bold`}>Найди себе тему которая интересная :)</h1>
            <p className={`${inter.className} text-primary-color text-2xl font-medium text-center`}>Веди в поиск то что ищешь</p>
            <form className='flex items-center gap-4'>
                <input type="text" placeholder='Поиск...' className='w-full h-[50px] rounded-full bg-[#F4F4F4] px-7 focus:border border-primary-color focus:border-1' />
                <div className='flex gap-4'>
                    <button className='w-full h-[50px] rounded-full active:bg-[#F4F4F4] active:text-nonary-color px-5 bg-nonary-color text-white transition-all duration-100'>
                        Поиск
                    </button>
                </div>
            </form>
            <div>

            </div>
        </article>
    )
}
