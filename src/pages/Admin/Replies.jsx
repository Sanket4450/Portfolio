import { useEffect } from 'react'
import { AllReplies } from '../../components/replies'

export const Replies = () => {
  useEffect(() => {
    document.title = 'Replies - Admin Dashboard | Portfolio'
  }, [])

  return (
    <div className=" bg-primary max-sm:px-5 sm:px-[5vw] lg:px-[80px]">
      <AllReplies />
    </div>
  )
}
