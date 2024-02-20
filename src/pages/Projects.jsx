import { useRef, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { AllProjects } from '../components/project'
import { projectCards } from '../data/projects'

export const Projects = () => {
  useEffect(() => {
    document.title = 'Portfolio | My Work'
  }, [])

  const { project } = useParams()
  const navigate = useNavigate()
  const projectRef = useRef()

  useEffect(() => {
    const isProject = projectCards.some((projectCard) => projectCard.id !== project)
    if (!isProject) {
      navigate('/not-found')
    }
  }, [project, navigate])

  useEffect(() => {
    if (projectRef.current) {
      projectRef.current.scrollIntoView({ behavior: 'auto', block: 'start' })
      const yOffset = -100
      const y = projectRef.current.getBoundingClientRect().top + window.scrollY + yOffset
      window.scrollTo({ top: y, behavior: 'auto' })
    }
  }, [project])

  return (
    <div className=" bg-primary max-sm:px-5 sm:px-[5vw] lg:px-[80px]">
      <AllProjects projectName={project} ref={projectRef} />
    </div>
  )
}
