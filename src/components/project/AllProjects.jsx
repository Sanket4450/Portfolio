import { forwardRef } from 'react'
import { ProjectCard } from './ProjectCard'
import { projectCards } from '../../data/projects'

export const AllProjects = forwardRef(({projectName}, ref) => {
  return (
    <div className=" space-y-20 py-20">
      {projectCards.map((card) => (
        <ProjectCard
          projectName={projectName}
          ref={ref}
          key={card.id}
          id={card.id}
          image={card.image}
          title={card.title}
          titleDesc={card.titleDescription}
          projectURL={card.projectURL}
          githubURL={card.githubURL}
          descPoints={card.descriptionPoints}
          technologies={card.technologies}
          align={card.align}
        />
      ))}
    </div>
  )
})
