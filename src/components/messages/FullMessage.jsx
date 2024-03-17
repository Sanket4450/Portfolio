import { MessageField } from './MessageField'

export const FullMessage = ({ id }) => {
  const firstName = 'John'
  const lastName = 'Doe'
  const email = 'johndoe@gmail.com'
  const mobile = 1234567890
  const dateReceived = new Date()

  return (
    <section>
      <div>
        <MessageField messageKey="Sender Name" messageValue={`${firstName} ${lastName}`} />
        <MessageField messageKey="Sender Email" messageValue={email} />
        {mobile && <MessageField messageKey="Sender Mobile" messageValue={mobile} />}
        <MessageField messageKey="Date Received" messageValue={dateReceived.toDateString()} />
      </div>
    </section>
  )
}
