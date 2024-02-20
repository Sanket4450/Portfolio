import { useEffect } from 'react'
import { AboutContent } from '../components/about'

export const About = () => {
  useEffect(() => {
    document.title = 'Portfolio | About Me'
  }, [])

  return (
    <div className=" bg-primary max-sm:px-5 sm:px-[5vw] lg:px-[80px]">
      <AboutContent />
    </div>
  )
}
