import { useEffect } from 'react'
import { MessageSubmit } from '../../components/submit'

export const Submit = () => {
  useEffect(() => {
    document.title = 'Message - Submit'
  }, [])

  return (
    <div className=" bg-primary max-sm:px-5 sm:px-[5vw] lg:px-[80px] py-20">
      <MessageSubmit />
    </div>
  )
}
