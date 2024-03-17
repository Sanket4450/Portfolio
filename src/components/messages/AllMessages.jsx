import { useState, useEffect } from 'react'
import { MessageOptions } from './MessageOptions'
import { MessageOptionsMobile } from './MessageOptionsMobile'
import { MessagesHeader } from './MessagesHeader'
import { SingleMessage } from './SingleMessage'

export const AllMessages = () => {
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
      <h1 className="text-3xl text-center font-bold text-primary mt-5">Received Messages</h1>
      {screenWidth >= 640 ? (
        <MessageOptions selectedMessages={selectedMessages} />
      ) : (
        <MessageOptionsMobile selectedMessages={selectedMessages} />
      )}
      <div className=" max-sm:space-y-3">
        {screenWidth >= 640 && <MessagesHeader screenWidth={screenWidth} />}
        <SingleMessage
          messageId={1}
          firstName="John"
          lastName="Doe"
          email="jonhdoe@gmail.com"
          subject="Hellow World!"
          isRead={true}
          receivedAt={new Date()}
          isSelected={selectedMessages.includes(1)}
          handleSelection={handleSelection}
          screenWidth={screenWidth}
        />
        <SingleMessage
          messageId={2}
          firstName="Sanket"
          lastName="Talaviya"
          email="tonystark@gmail.com"
          subject="I am resolving this issue regarding to react and redux!"
          isRead={false}
          receivedAt={new Date()}
          isSelected={selectedMessages.includes(2)}
          handleSelection={handleSelection}
          screenWidth={screenWidth}
        />
        <SingleMessage
          messageId={3}
          firstName="Steve"
          lastName="Rogers"
          email="www.talaviyasanket4455@gmail.com"
          subject="This is my message!"
          isRead={false}
          receivedAt={new Date()}
          isSelected={selectedMessages.includes(3)}
          handleSelection={handleSelection}
          screenWidth={screenWidth}
        />
      </div>
    </div>
  )
}
