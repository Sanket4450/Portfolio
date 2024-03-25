import { useState, useEffect } from 'react'
import { ReplyOptions } from './ReplyOptions'
import { SingleReply } from './SingleReply'

export const AllReplies = ({ token }) => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)
  const [selectedMessages, setSelectedMessages] = useState([])

  useEffect(() => {
    window.addEventListener('resize', () => setScreenWidth(window.innerWidth))

    return () => {
      window.removeEventListener('resize', () => setScreenWidth(window.innerWidth))
    }
  }, [])

  const handleSelection = (messageId) => {
    if (selectedMessages.includes(messageId)) {
      setSelectedMessages(selectedMessages.filter((id) => id !== messageId))
    } else {
      setSelectedMessages([...selectedMessages, messageId])
    }
  }

  return (
    <div>
      <h1 className=" text-2xl phone:text-3xl text-center font-bold text-primary mt-5">Received Replies</h1>
      <ReplyOptions selectedMessages={selectedMessages} />
      <SingleReply
        replyId={1}
        subject="abc contract based startup"
        description="anfds fas afdhfashfsjfaskfjskaf ajfka asdfjsdfjskf"
        sentAt={new Date()}
        isSelected={selectedMessages.includes(1)}
        handleSelection={handleSelection}
      />
    </div>
  )
}
