import React from 'react'
import ProjectCard from '../components/ProjectCard'

export default function page() {
    return (
        <main className='container mx-auto my-[115px]'>
            <section className='grid grid-cols-3 gap-6 justify-items-center'>
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
            </section>
        </main>
    )
}
