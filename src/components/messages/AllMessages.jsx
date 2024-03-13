import { useState, useEffect } from 'react'
import { MessagesHeader } from './MessagesHeader'
import { SingleMessage } from './SingleMessage'

export const AllMessages = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)

  useEffect(() => {
    window.addEventListener('resize', () => setScreenWidth(window.innerWidth))

    return () => {
      window.removeEventListener('resize', () => setScreenWidth(window.innerWidth))
    }
  }, [])

  return (
    <div>
      <h1 className="text-3xl text-center font-bold text-primary py-5">Admin Dashboard</h1>
      <div className=" max-sm:space-y-3">
        {screenWidth >= 640 && <MessagesHeader screenWidth={screenWidth} />}
        <SingleMessage
          messageId={1}
          firstName="John"
          lastName="Doe"
          email="jonhdoe@gmail.com"
          isRead={true}
          receivedAt={new Date()}
          screenWidth={screenWidth}
        />
        <SingleMessage
          messageId={1}
          firstName="Tony"
          lastName="Stark"
          email="tonystark@gmail.com"
          isRead={false}
          receivedAt={new Date()}
          screenWidth={screenWidth}
        />
        <SingleMessage
          messageId={1}
          firstName="Steve"
          lastName="Rogers"
          email="steverogers@gmail.com"
          isRead={false}
          receivedAt={new Date()}
          screenWidth={screenWidth}
        />
      </div>
    </div>
  )
}
