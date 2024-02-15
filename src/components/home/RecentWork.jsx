import { NavLink } from 'react-router-dom'
import { TitleLink } from '../ui'
import { WorkCard } from './WorkCard'
import { projectCards } from '../../data/projects'

export const RecentWork = () => {
  return (
    <section className=" py-24 space-y-10">
      <div>
        <TitleLink title="Recent Works" path="/projects" />
        <div className=" flex justify-between items-start py-4">
          <h2 className=" text-primary font-bold text-2xl sm:text-3xl md:text-4xl sm:max-w-[45%]">
            Some of my favourite projects.
          </h2>
          <NavLink
            to="/projects"
            className=" max-sm:hidden text-primary font-semibold text-sm px-4 py-2 border-2 border-text-theme-primary rounded-sm hover:text-bg-primary hover:bg-text-theme-primary"
          >
            View All Projects
          </NavLink>
        </div>
      </div>
      <div className=" flex flex-col lg:flex-row justify-between items-center max-lg:space-y-7 sm:max-lg:grid sm:max-lg:grid-cols-1">
        {projectCards.map((projectCard) => (
          <WorkCard
            key={projectCard.id}
            path={projectCard.path}
            title={projectCard.title}
            image={projectCard.image}
            extraClasses={projectCard.extraClasses}
          />
        ))}
      </div>
    </section>
  )
}
