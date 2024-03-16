import { Checkbox } from '@mui/material'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReply, faTrash } from '@fortawesome/free-solid-svg-icons'

export const SingleMessage = ({
  messageId,
  firstName,
  lastName,
  email,
  isRead,
  receivedAt,
  isSelected,
  handleSelection,
  screenWidth,
}) => {
  if (screenWidth >= 640) {
    return (
      <div
        id={messageId}
        className={` flex items-center h-10 text-primary border-b-4 border-text-theme-primary hover:cursor-pointer ${
          isRead ? 'font-light' : 'font-semibold'
        }`}
      >
        <div className=" w-[3%] text-center">
          <Checkbox
            id={String(messageId)}
            sx={{
              color: 'var(--text-theme-primary)',
              '&.Mui-checked': {
                color: 'var(--text-theme-hover-primary)',
              },
            }}
            checked={isSelected}
            onChange={() => handleSelection(messageId)}
          />
        </div>
        <p className=" w-[25%] md:w-[20%] max-tab:text-sm text-center whitespace-nowrap overflow-hidden">
          {firstName} {lastName}
        </p>
        <p className=" w-[45%] lg:w-[35%] max-tab:text-sm text-center">{email}</p>
        <p className=" w-[27%] md:w-[20%] max-tab:text-sm text-center">{receivedAt.toDateString()}</p>
        {screenWidth >= 1024 && <p className=" w-[10%] text-center">{isRead ? 'Read' : 'Unread'}</p>}
        {screenWidth >= 768 && (
          <div className=" w-[12%] text-center space-x-[10%]">
            <FontAwesomeIcon icon={faReply} className=" text-lg hover:cursor-pointer hover:text-gray-strong" />
            <FontAwesomeIcon icon={faTrash} className=" text-lg hover:cursor-pointer hover:text-gray-strong" />
          </div>
        )}
      </div>
    )
  } else {
    return (
      <div
        id={messageId}
        ref={refMessage}
        className=" h-28 phone:h-16 flex max-phone:flex-col justify-around phone:justify-between items-center bg-text-theme-primary text-bg-primary rounded-md hover:cursor-pointer"
      >
        <div className=" pl-3 max-phone:text-center">
          <p className=" font-semibold text-2xl phone:text-[22px]">
            {firstName} {lastName}
          </p>
          <p className=" phone:text-[14px]">{email}</p>
        </div>
        <div className=" pr-3 phone:h-[85%] max-phone:w-full py-0.5 flex phone:flex-col justify-between max-phone:items-center text-center">
          <p className=" text-sm max-phone:ml-3">{receivedAt.toDateString()}</p>
          {!isRead && (
            <p className=" bg-gray-weak text-primary max-phone:px-4 max-phone:py-1 max-phone:mr-1 text-center font-semibold text-sm rounded-lg">
              Unread
            </p>
          )}
        </div>
      </div>
    )
  }
}
