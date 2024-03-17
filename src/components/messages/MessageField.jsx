export const MessageField = ({ messageKey, messageValue }) => {
  return (
    <div className=" bg-gray-weak flex space-x-2 py-1 px-2">
      <p className=" text-theme-primary font-semibold">{messageKey}:</p>
      <p className=" text-primary">{messageValue}</p>
    </div>
  )
}
