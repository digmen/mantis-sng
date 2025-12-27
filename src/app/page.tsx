import React from 'react'
import Link from 'next/link'
import Image from 'next/image';


export default function Home() {

  return (
    <main className='container mx-auto flex flex-col gap-[150px]'>
      <section className='flex flex-col gap-[145px]'>
        <article className='flex flex-col items-center gap-[30px]'>
          <h1 className='text-primary-color text-[50px] text-center mt-[115px]'>Ваши вызовы — стимул для нашего <br /> творчества и поиска нестандартных <br /> решений</h1>
          <Link href='/our-service' className='bg-primary-color text-white px-[69px] py-[16px] rounded-full font-normal'>Наши услуги</Link>
        </article>
        <article className='flex justify-between'>
          <div className='flex flex-col items-center'>
            <strong className='text-primary-color text-[69px] font-bold text-center'>25+</strong>
            <span className='text-secondary-color text-[20px] font-medium text-center'>Профессиональных IT экспертов</span>
          </div>
          <div className='flex flex-col items-center'>
            <strong className='text-primary-color text-[69px] font-bold text-center'>100K+</strong>
            <span className='text-secondary-color text-[20px] font-medium text-center'>Часов работ над проектами</span>
          </div>
          <div className='flex flex-col items-center'>
            <strong className='text-primary-color text-[69px] font-bold text-center'>10K+</strong>
            <span className='text-secondary-color text-[20px] font-medium text-center'>Активных пользывателей</span>
          </div>
          <div className='flex flex-col items-center'>
            <strong className='text-primary-color text-[69px] font-bold text-center'>350</strong>
            <span className='text-secondary-color text-[20px] font-medium text-center'>Успешных проектов</span>
          </div>
        </article>
      </section>
      <section className='flex justify-between items-center'>
        <article className='w-[777px] h-[383px] bg-gray-500 rounded-[13px]'></article>
        <article className='flex flex-col items-start gap-[30px]'>
          <h2 className='text-primary-color text-[35px] font-bold'>
            Легкий старт с нашей <br /> видеоинструкцией
          </h2>
          <span className='text-secondary-color text-[16px] font-medium'>
            Посмотрите наше видео и убедитесь, как просто и <br /> удобно работать с нами на каждом этапе — от идеи <br /> до финального результата. Мы делаем процесс <br /> понятным и прозрачным для вас.
          </span>
          <Link href='/contacts' className='bg-primary-color text-white px-[69px] py-[16px] rounded-full font-normal'>Заказать</Link>
        </article>
      </section>
      <section>
        <h1 className='text-primary-color font-bold text-[48px] text-center'>
          Наши Услуги
        </h1>
        <article className='grid grid-cols-3 gap-9 mt-9'>
          <div className='flex flex-col gap-2.5 h-max border-secondary-color border rounded-[40px] p-[25px]'>
            <h2 className='text-primary-color font-bold text-[24px] text-start'>Чат-бот с ИИ-агентом</h2>
            <h3 className='text-tertiary-color font-bold text-[36px] text-start'>от 400$</h3>
            <span className='text-primary-color text-[16px]'>
              Умный бот, который автоматизирует продажи, поддержку или консультации.
            </span>
            <ul className='flex flex-col gap-3.5'>
              <li className='flex gap-1.5 text-primary-color text-[16px]'>
                <Image src='/assets/checkmark.svg' alt='check mark' width={20} height={20} />
                Интеграция GPT-4 или Claude 3 (на выбор)
              </li>
              <li className='flex gap-1.5 text-primary-color text-[16px]'>
                <Image src='/assets/checkmark.svg' alt='check mark' width={20} height={20} />
                Telegram, WhatsApp, Instagram или сайт-чат
              </li>
              <li className='flex gap-1.5 text-primary-color text-[16px]'>
                <Image src='/assets/checkmark.svg' alt='check mark' width={20} height={20} />
                Автоматизация типовых запросов
              </li>
              <li className='flex gap-1.5 text-primary-color text-[16px]'>
                <Image src='/assets/checkmark.svg' alt='check mark' width={20} height={20} />
                Подключение базы знаний (PDF, Notion, FAQ и др.)
              </li>
              <li className='flex gap-1.5 text-primary-color text-[16px]'>
                <Image src='/assets/checkmark.svg' alt='check mark' width={20} height={20} />
                Настройка персонажа (тон, стиль общения)
              </li>
              <li className='flex gap-1.5 text-primary-color text-[16px]'>
                <Image src='/assets/checkmark.svg' alt='check mark' width={20} height={20} />
                Панель аналитики и статистики
              </li>
              <li className='flex gap-1.5 text-primary-color text-[16px]'>
                <Image src='/assets/checkmark.svg' alt='check mark' width={20} height={20} />
                Поддержка и сопровождение
              </li>
            </ul>
            <Link href='/contacts' className='mt-5 flex justify-center bg-tertiary-color text-white px-[69px] py-[16px] rounded-full font-normal'>
              Заказать чат-бота
            </Link>
          </div>
          <div className='flex flex-col gap-2.5 h-max border-secondary-color border rounded-[40px] p-[25px]'>
            <h2 className='text-primary-color font-bold text-[24px] text-start'>Landing Page</h2>
            <h3 className='text-tertiary-color font-bold text-[36px] text-start'>от 250$</h3>
            <span className='text-primary-color text-[16px]'>Веб-страница направляет посетителей к единому призыву.</span>
            <ul className='flex flex-col gap-3.5'>
              <li className='flex gap-1.5 text-primary-color text-[16px]'>
                <Image src='/assets/checkmark.svg' alt='check mark' width={20} height={20} />
                Уникальный дизайн под нишу клиента
              </li>
              <li className='flex gap-1.5 text-primary-color text-[16px]'>
                <Image src='/assets/checkmark.svg' alt='check mark' width={20} height={20} />
                Верстка под все устройства (адаптив)
              </li>
              <li className='flex gap-1.5 text-primary-color text-[16px]'>
                <Image src='/assets/checkmark.svg' alt='check mark' width={20} height={20} />
                SEO-оптимизированная структура
              </li>
              <li className='flex gap-1.5 text-primary-color text-[16px]'>
                <Image src='/assets/checkmark.svg' alt='check mark' width={20} height={20} />
                Админ-панель для редактирования контента
              </li>
              <li className='flex gap-1.5 text-primary-color text-[16px]'>
                <Image src='/assets/checkmark.svg' alt='check mark' width={20} height={20} />
                Подключение формы заявки или телеграм-бота
              </li>
              <li className='flex gap-1.5 text-primary-color text-[16px]'>
                <Image src='/assets/checkmark.svg' alt='check mark' width={20} height={20} />
                Бесплатный домен на 1 год
              </li>
              <li className='flex gap-1.5 text-primary-color text-[16px]'>
                <Image src='/assets/checkmark.svg' alt='check mark' width={20} height={20} />
                Настройка email-адресов с доменом
              </li>
              <li className='flex gap-1.5 text-primary-color text-[16px]'>
                <Image src='/assets/checkmark.svg' alt='check mark' width={20} height={20} />
                Хостинг на 1 месяц
              </li>
              <li className='flex gap-1.5 text-primary-color text-[16px]'>
                <Image src='/assets/checkmark.svg' alt='check mark' width={20} height={20} />
                Техподдержка 24/7 (1 месяц)
              </li>
              <li className='flex gap-1.5 text-primary-color text-[16px]'>
                <Image src='/assets/checkmark.svg' alt='check mark' width={20} height={20} />
                Срок разработки от 5 дней
              </li>
            </ul>
            <Link href='/contacts' className='mt-5 flex justify-center bg-tertiary-color text-white px-[69px] py-[16px] rounded-full font-normal'>Заказать</Link>
          </div>
          <div className='flex flex-col gap-2.5 h-max border-secondary-color border rounded-[40px] p-[25px]'>
            <h2 className='text-primary-color font-bold text-[24px] text-start'>Корпоративный сайт под ключ</h2>
            <h3 className='text-tertiary-color font-bold text-[36px] text-start'>от 700$</h3>
            <span className='text-primary-color text-[16px]'>
              Презентуйте ваш бизнес в интернете — доверие клиентов начинается с сайта.
            </span>
            <ul className='flex flex-col gap-3.5'>
              <li className='flex gap-1.5 text-primary-color text-[16px]'>
                <Image src='/assets/checkmark.svg' alt='check mark' width={20} height={20} />
                Уникальный фирменный стиль и дизайн
              </li>
              <li className='flex gap-1.5 text-primary-color text-[16px]'>
                <Image src='/assets/checkmark.svg' alt='check mark' width={20} height={20} />
                До 10 информационных разделов
              </li>
              <li className='flex gap-1.5 text-primary-color text-[16px]'>
                <Image src='/assets/checkmark.svg' alt='check mark' width={20} height={20} />
                SEO и базовая оптимизация скорости
              </li>
              <li className='flex gap-1.5 text-primary-color text-[16px]'>
                <Image src='/assets/checkmark.svg' alt='check mark' width={20} height={20} />
                Мультиязычная поддержка (при необходимости)
              </li>
              <li className='flex gap-1.5 text-primary-color text-[16px]'>
                <Image src='/assets/checkmark.svg' alt='check mark' width={20} height={20} />
                CRM-интеграции и формы обратной связи
              </li>
              <li className='flex gap-1.5 text-primary-color text-[16px]'>
                <Image src='/assets/checkmark.svg' alt='check mark' width={20} height={20} />
                Система управления контентом (CMS)
              </li>
              <li className='flex gap-1.5 text-primary-color text-[16px]'>
                <Image src='/assets/checkmark.svg' alt='check mark' width={20} height={20} />
                Хостинг, домен, поддержка 1 месяц включены
              </li>
            </ul>
            <Link href='/contacts' className='mt-5 flex justify-center bg-tertiary-color text-white px-[69px] py-[16px] rounded-full font-normal'>
              Получить сайт
            </Link>
          </div>
        </article>
      </section>
      <section>
        <h1 className='text-primary-color font-bold text-[48px] text-center'>Связаться с нами</h1>
        <article className='grid grid-cols-2 gap-[80px] mt-[30px]'>
          <article className='flex flex-col border border-black rounded-4xl p-[35px]'>
            <h2 className='font-semibold text-[35px] text-black'>Оставьте заявку</h2>
            <p className='font-normal text-[18px] text-black pt-[15px]'>Оставьте заявку и мы с вами свяжемся</p>
            <form className='flex flex-col items-start gap-3 pt-[66px]'>
              <input
                className='focus:outline-none w-full py-2.5 border-secondary-color border-b-[1px]'
                placeholder='Имя'
              />
              <input
                className='focus:outline-none w-full mt-1.5 py-2.5 border-secondary-color border-b-[1px]'
                placeholder='Номер телефона или почта'
              />
              <textarea
                className='focus:outline-none w-full py-2.5 mt-1.5 min-h-[140px] border-secondary-color border-b-[1px]'
                placeholder='Расскажите о вашем проекте'
              ></textarea>
              <button
                className='rounded-full bg-primary-color text-white text-[20px] px-[100px] py-[15px] mt-[48px]'
              >
                Отправить
              </button>
            </form>
          </article>
          <section className='flex flex-col gap-[30px]'>
            <article>
              <h2 className='font-bold text-[40px] text-black'>Давайте Обсудим ваш проект</h2>
              <p className='text-[16px] pt-[20px]'>Профессиональная и оперативная консультация, в результате которой вы получите ответы на все ваши вопросы</p>
            </article>
            <article className='flex flex-col gap-[10px]'>
              <span className='font-bold text-2xl'>Контакты</span>
              <a href='#' className='text-[16px]'>+996 507 023 651</a>
            </article>
            <article className='flex flex-col gap-[10px]'>
              <span className='font-bold text-2xl'>Социальные сети</span>
              <article className='flex gap-[25px] items-center'>
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
            </article>
            <article className='flex flex-col gap-[10px]'>
              <span className='font-bold text-2xl'>Почта</span>
              <a href='#' className='text-[16px]'>example@gmail.com</a>
            </article>
          </section>
        </article>
      </section>
    </main>
  );
}
