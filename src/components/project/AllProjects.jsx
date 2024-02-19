import { ProjectCard } from './ProjectCard'
import { projectCards } from '../../data/projects'

export const AllProjects = () => {
  return (
    <div>
      {projectCards.map((card) => (
        <ProjectCard
          key={card.id}
          image={card.image}
          title={card.title}
          titleDesc={card.titleDescription}
          projectURL={card.projectURL}
          githubURL={card.githubURL}
          descPoints={card.descriptionPoints}
          technologies={card.technologies}
        />
      ))}
    </div>
  )
}
