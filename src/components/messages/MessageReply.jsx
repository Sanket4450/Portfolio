import { MessageField } from './MessageField'
import { MesageReplyInput } from './MesageReplyInput.jsx'

export const MessageReply = ({ email }) => {
  return (
    <div className=" border-4 border-text-theme-primary rounded-md mx-2 my-5 p-2">
      <MessageField messageKey="Reply To" messageValue={email} />
      <MesageReplyInput inputKey="Message Subject" inputRows={1} inputName="subject" />
      <MesageReplyInput inputKey="Message Content" inputRows={10} inputName="description" />
      <button className=" bg-text-theme-primary hover:bg-text-theme-hover-primary text-bg-primary font-semibold rounded-md px-10 py-2 ml-2 my-1">
        Send
      </button>
    </div>
  )
}
