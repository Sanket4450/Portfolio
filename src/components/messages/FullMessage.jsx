import { useState, useEffect } from 'react'
import { FullMessageOptions } from './FullMessageOptions'
import { MessageField } from './MessageField'

export const FullMessage = ({ id }) => {
  const [isRead, setIsRead] = useState(false)

  const user = {
    firstName: 'John',
    lastName: 'Doe',
    email: 'www.talaviysanket4455@gmail.com',
    mobile: 1234567890,
    subject: 'Hellow World!',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    dateReceived: new Date(),
    isRead: false,
  }

  useEffect(() => {
    setIsRead(user.isRead)
  }, [])

  return (
    <section>
      <FullMessageOptions isRead={isRead} setIsRead={setIsRead} />
      <div>
        <MessageField messageKey="Sender Name" messageValue={`${user.firstName} ${user.lastName}`} />
        <MessageField messageKey="Sender Email" messageValue={user.email} />
        {user.mobile && <MessageField messageKey="Sender Mobile" messageValue={user.mobile} />}
        <MessageField messageKey="Message Subject" messageValue={user.subject} />
        <MessageField messageKey="Message Content" messageValue={user.description} />
        <MessageField messageKey="Date Received" messageValue={user.dateReceived.toDateString()} />
        <MessageField messageKey="Message Status" messageValue={isRead ? 'Read' : 'Unread'} />
      </div>
    </section>
  )
}
