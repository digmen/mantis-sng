import BlogInput from '../components/blog/BlogInput'
import BlogButtonFilter from '../components/blog/BlogButtonFilter'
import BlogCard from '../components/blog/BlogCard'


export default async function Page() {
    return (
        <main className='container mx-auto mt-[70px] mb-[115px] flex flex-col gap-6'>
            <BlogInput />
            <BlogButtonFilter />
            <BlogCard />
        </main>
    )
}
