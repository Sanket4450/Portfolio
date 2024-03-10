import { useEffect } from 'react'
import { AllMessages } from '../../components/messages'

export const Messages = () => {
  useEffect(() => {
    document.title = 'Received Messages - Admin Dashboard | Portfolio'
  }, [])

  return (
    <div className=" bg-primary max-sm:px-5 sm:px-[5vw] lg:px-[80px]">
      <AllMessages />
    </div>
  )
}
