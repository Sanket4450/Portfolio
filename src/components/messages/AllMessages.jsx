import { useState, useEffect } from 'react'
import { MessageOptions } from './MessageOptions'
import { MessageOptionsMobile } from './MessageOptionsMobile'
import { MessagesHeader } from './MessagesHeader'
import { SingleMessage } from './SingleMessage'
import { getReceivedMessages } from '../../api/admin'

export const AllMessages = ({ token }) => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)
  const [selectedMessages, setSelectedMessages] = useState([])
  const [messages, setMessages] = useState([])

  useEffect(() => {
    getReceivedMessages(token).then((data) => setMessages(data.messages))
  }, [])

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
    <section>
      <h1 className=" text-xl phone:text-3xl text-center font-bold text-primary mt-5">Received Messages</h1>
      {screenWidth >= 640 ? (
        <MessageOptions selectedMessages={selectedMessages} />
      ) : (
        <MessageOptionsMobile selectedMessages={selectedMessages} />
      )}
      <div className=" max-sm:space-y-3">
        {screenWidth >= 640 && <MessagesHeader screenWidth={screenWidth} />}
        {messages.map((message) => (
          <SingleMessage
            key={message.messageId}
            messageId={message.messageId}
            firstName={message.firstName}
            lastName={message.lastName}
            email={message.email}
            subject={message.subject}
            isRead={message.isRead}
            receivedAt={new Date(message.receivedAt)}
            isSelected={selectedMessages.includes(message.messageId)}
            handleSelection={handleSelection}
            screenWidth={screenWidth}
          />
        ))}
      </div>
    </section>
  )
}
