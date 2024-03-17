import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { FullMessage } from '../../components/messages'

export const Message = () => {
  const { messageId } = useParams()

  useEffect(() => {
    document.title = `Received Message ID - ${messageId} - Admin Dashboard | Portfolio`
  }, [])

  return (
    <div className=" bg-primary max-sm:px-5 sm:px-[5vw] lg:px-[80px]">
      <FullMessage id={messageId} />
    </div>
  )
}
