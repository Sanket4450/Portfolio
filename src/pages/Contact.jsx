import { useEffect } from 'react'
import { ContactInfo, GetInTouch } from '../components/contact'

export const Contact = () => {
  useEffect(() => {
    document.title = 'Portfolio | Contact Me'
  }, [])

  return (
    <div className=" bg-primary max-sm:px-5 sm:px-[5vw] lg:px-[80px]">
      <ContactInfo />
      <GetInTouch />
    </div>
  )
}
