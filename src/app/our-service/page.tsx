import { Inter } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

const interItalic = Inter({
  subsets: ['latin'],
  display: 'swap',
  style: 'italic',  // курсивный стиль
})

export default function page() {
  return (
    <main className='mt-[115px]'>
      <article className='container mx-auto mt-[115px]'>
        <h1 className={`${inter.className} text-center font-bold text-4xl text-quaternary-color`}>Наши услуги</h1>
        <p className={`${interItalic.className} text-center mt-[20px] text-[16px] text-quaternary-color`}>Наши услуги помогут Вам в конкуренции!</p>
      </article>
      <article className='container mx-auto grid grid-cols-2 grid-rows-2 gap-[27px] mt-[50px]'>
        <section className='bg-white rounded-2xl shadow-[0px_30px_55px_0px_#1b204b3b] p-[35px] flex items-center gap-[50px]'>
          <span className={`${inter.className} text-tertiary-color font-bold text-[90px]`}>
            1
          </span>
          <div className='flex flex-col gap-[20px]'>
            <h2 className={`${inter.className} font-bold text-[20px] text-quaternary-color`}>Современный и красивый дизайн</h2>
            <p className={`${inter.className} text-[16px] text-black font-normal`}>Ищем стиль для главной страницы, подготавливаем примеры других сайтов — обсуждаем их с вами, чтобы создать именно тот сайт, который вам нравится.</p>
          </div>
        </section>
        <section className='bg-white rounded-2xl shadow-[0px_30px_55px_0px_#1b204b3b] p-[35px] flex items-center gap-[50px]'>
          <span className={`${inter.className} text-tertiary-color font-bold text-[90px]`}>
            2
          </span>
          <div className='flex flex-col gap-[20px]'>
            <h2 className={`${inter.className} font-bold text-[20px] text-quaternary-color`}>Запуск сайта </h2>
            <p className={`${inter.className} text-[16px] text-black font-normal`}>Наполняем сайт контентом, который не смогли автоматически забрать с вашего старого сайта. При необходимости напишем кликабельные тексты.</p>
          </div>
        </section>
        <section className='bg-white rounded-2xl shadow-[0px_30px_55px_0px_#1b204b3b] p-[35px] flex items-center gap-[50px]'>
          <span className={`${inter.className} text-tertiary-color font-bold text-[90px]`}>
            3
          </span>
          <div className='flex flex-col gap-[20px]'>
            <h2 className={`${inter.className} font-bold text-[20px] text-quaternary-color`}>Поддержка сайта </h2>
            <p className={`${inter.className} text-[16px] text-black font-normal`}>Вы ставите задачи, наши специалисты выполняют. Подходит для проектов с нерегулярными изменениями и расширением функционала.</p>
          </div>
        </section>
        <section className='bg-white rounded-2xl shadow-[0px_30px_55px_0px_#1b204b3b] p-[35px] flex items-center gap-[50px]'>
          <span className={`${inter.className} text-tertiary-color font-bold text-[90px]`}>
            4
          </span>
          <div className='flex flex-col gap-[20px]'>
            <h2 className={`${inter.className} font-bold text-[20px] text-quaternary-color`}>Продвижение сайта</h2>
            <p className={`${inter.className} text-[16px] text-black font-normal`}>После разработки необходимо новый поток клиентов, мы настроим и запустим Вам рекламу для привлечения новых клиентов.</p>
          </div>
        </section>
      </article>
      <article className='mt-[150px] container mx-auto'>
        <section>
          <h1 className={`${inter.className} text-center text-quaternary-color font-bold text-[35px]`}>Создание сайтов в Бишкеке</h1>
          <p className={`${inter.className} mt-[40px] text-quinary-color font-normal text-[16px] text-center`}>Наша <strong className='text-tertiary-color font-normal'>веб-студия</strong> разрабатывает сайты для предприятий малого, <br /> среднего бизнеса, наши компетенции и накопленный опыт помогут <br /> вам повысить продажи и узнаваемость вашей компании</p>
        </section>
        <section className='mt-[90px] grid grid-cols-3 justify-items-center'>
          <div className='w-[340px] shadow-[0px_30px_55px_0px_#1b204b3b] p-[35px] flex flex-col items-center relative'>
            <Image className='absolute top-0 left-0' src='assets/circle.svg' alt='circle' width={130} height={130} />
            <Image src='/assets/highqualityperformance.png' alt='' width={100} height={100} />
            <h2 className={`${inter.className} font-bold text-center text-quaternary-color text-[18px] mt-[35px]`}>Качественное исполнение</h2>
            <p className={`${inter.className} font-normal text-center text-quaternary-color text-[16px] mt-[15px]`}>Мы создаем продукт, который прослужит не один год. Поэтапное согласование с заказчиком, дает гарантию того, что клиент получит презентабельный сайт.</p>
          </div>
          <div className='w-[340px] shadow-[0px_30px_55px_0px_#1b204b3b] p-[35px] flex flex-col items-center relative'>
            <Image className='absolute top-0 left-0' src='assets/circle.svg' alt='circle' width={130} height={130} />
            <Image src='/assets/reasonableprices.png' alt='' width={100} height={100} />
            <h2 className={`${inter.className} font-bold text-center text-quaternary-color text-[18px] mt-[35px]`}>Адекватные цены</h2>
            <p className={`${inter.className} font-normal text-center text-quaternary-color text-[16px] mt-[15px]`}>У нас одни из самых приемлемых цен в городе, дешевле только неработающие сайты.</p>
          </div>
          <div className='w-[340px] shadow-[0px_30px_55px_0px_#1b204b3b] p-[35px] flex flex-col items-center relative'>
            <Image className='absolute top-0 left-0' src='assets/circle.svg' alt='circle' width={130} height={130} />
            <Image src='/assets/transparency.png' alt='' width={100} height={100} />
            <h2 className={`${inter.className} font-bold text-center text-quaternary-color text-[18px] mt-[35px]`}>Прозрачность</h2>
            <p className={`${inter.className} font-normal text-center text-quaternary-color text-[16px] mt-[15px]`}>Мы знаем о Ваших беспокойствах. Чтобы развеять их, предусмотрена еженедельная встреча, где клиент может увидеть прогресс, или внести корректировки.</p>
          </div>
        </section>
      </article>
      <article className='bg-[url(/assets/bgourservice.png)] bg-no-repeat h-[274px] w-full bg-cover mt-[165px] grid grid-cols-4 justify-items-center items-center'>
        <div>
          <h1 className={`${inter.className} font-bold text-center text-white text-[50px]`}>7 лет</h1>
          <p className={`${inter.className} font-medium text-center text-senary-color text-[16px]`}>На рынке Кыргызстана</p>
        </div>
        <div>
          <h1 className={`${inter.className} font-bold text-center text-white text-[50px]`}>200</h1>
          <p className={`${inter.className} font-medium text-center text-senary-color text-[16px]`}>Более 200 довольных клиентов</p>
        </div>
        <div>
          <h1 className={`${inter.className} font-bold text-center text-white text-[50px]`}>6 мес.</h1>
          <p className={`${inter.className} font-medium text-center text-senary-color text-[16px]`}>6 месяцев бесплатной поддержки</p>
        </div>
        <div>
          <h1 className={`${inter.className} font-bold text-center text-white text-[50px]`}>10к+</h1>
          <p className={`${inter.className} font-medium text-center text-senary-color text-[16px]`}>Более 10 000 часов работы</p>
        </div>
      </article>
      <article className='container mx-auto mt-[115px]'>
        <h1 className={`${inter.className} font-bold text-[32px] text-primary-color text-center`}>Хотите заказать сайт?</h1>
        <p className={`${inter.className} font-normal text-[16px] text-secondary-color text-center mt-[15px]`}>У нас работают профессионалы с большим опытом, у вас не <br /> будет проблем с не знающими моментами при разработке сайта, <br /> все самое нужное мы вам посоветуем и предоставим.</p>
        <section className='flex justify-center mt-[10px]'>
          <div className='bg-white shadow-[0px_30px_55px_0px_#1b204b3b] flex justify-center w-[540px] '>
            <a href='#' className='p-[40px] flex flex-col flex-1 items-center border-r-tertiary-color border-r-[0.5px]'>
              <span className={`${inter.className}text-octonary-color text-[14px] font-medium w-max`}>Для деловых предложений:</span>
              <span className={`${inter.className} text-tertiary-color text-[18px] font-bold`}>info@gmail.com</span>
            </a>
            <a href='#' className='p-[40px] flex flex-col flex-1 items-center border-l-tertiary-color border-l-[0.5px]'>
              <span className={`${inter.className}text-octonary-color text-[14px] font-medium w-max`}>Для консультации:</span>
              <span className={`${inter.className} text-tertiary-color text-[18px] font-bold`}>+996 507 023 651</span>
            </a>
          </div>
        </section>
        <section className='mt-[30px] flex justify-center'>
          <Link href="#" className={`${inter.className} py-[12px] px-[25px] font-medium text-white text-[14px] bg-tertiary-color rounded-full`}>Узнать цены</Link>
        </section>
      </article>
    </main>
  )
}
