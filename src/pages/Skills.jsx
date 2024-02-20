import { useEffect } from 'react'
import { AllSkills } from '../components/skill'

export const Skills = () => {
  useEffect(() => {
    document.title = 'Portfolio | My Skills'
  }, [])

  return (
    <div className=" bg-primary max-sm:px-5 sm:px-[5vw] lg:px-[80px]">
      <AllSkills />
    </div>
  )
}
