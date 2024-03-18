export const MessageField = ({ messageKey, messageValue }) => {
  return (
    <div className=" py-2 px-2 space-y-2.5">
      <p className=" bg-text-theme-primary text-bg-primary text-lg font-semibold rounded-md px-2">{messageKey}</p>
      <p className=" bg-greenGray text-justify rounded-md px-2 overflow-scroll">{messageValue}</p>
    </div>
  )
}
