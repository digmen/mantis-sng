import Image from 'next/image'
import React from 'react'

export default function ProjectCard() {
    return (
        <article className='border border-black rounded-4xl p-[20px] w-min'>
            <div className='w-[300px] h-[176px] bg-primary-color rounded-2xl'></div>
            <div className='mt-[15px]'>
                <h2 className='mt-[12px] font-semibold text-[22px] text-primary-color'>Coffee Website</h2>
                <p className='mt-[7px] font-normal text-primary-color text-[16px]'>
                    Краткое описание проекта, чтобы вставить сюда
                </p>
                <span className='flex gap-2 font-normal text-[12px] text-secondary-color mt-[12px]'>
                    <Image src='/assets/react.svg' alt='react' width={25} height={25} />
                    <Image src='/assets/Sass.svg' alt='sass' width={25} height={25} />
                    <Image src='/assets/figma.svg' alt='figma' width={25} height={25} />
                </span>
                <span className='flex items-center gap-1.5 font-normal text-[12px] text-secondary-color mt-[12px]'>
                    <Image src='/assets/Link.svg' alt='link' width={25} height={25} />
                    Посетить Проект
                </span>
            </div>
        </article>
    )
}
