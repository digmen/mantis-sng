import { API_URL } from '@/api/api';
import Image from 'next/image';
import Link from 'next/link';

export default async function BlogCard() {
    const res = await fetch(`${API_URL}/blog?page=1&limit=9`)
    const { data } = await res.json();
    return (
        <section className="grid grid-cols-3 gap-6">
            {data.map((item, index) => (
                <article key={index}>
                    {item?.image ? (
                        <div className="w-[409px] h-[209px] rounded-2xl overflow-hidden">
                            <Link href={`/blog/${item.id}`} className="w-full h-full flex justify-center items-center">
                                <Image className='rounded-2xl' src={item.image} alt="blog img" width={410} height={210} />
                            </Link>
                        </div>
                    ) : (
                        <Link href={`/blog/${item.id}`} className="w-[409px] h-[209px] bg-primary-color rounded-2xl overflow-hidden flex justify-center items-center">
                            <span className='text-white'>Нет изображения</span>
                        </Link>
                    )}
                    <div className="mt-[15px] px-[15px]">
                        <h2 className="mt-[12px] font-bold text-2xl text-primary-color">{item.title}</h2>
                        <p className="mt-[12px] font-medium text-primary-color text-[14px]">Mantis Studio</p>
                        <span className="flex gap-1.5 font-normal text-[12px] text-secondary-color mt-[12px]">
                            <Image src="/assets/Book.svg" alt="book" width={20} height={20} />
                            {item.time} min read
                        </span>
                    </div>
                </article>
            ))}
        </section>
    );
}
