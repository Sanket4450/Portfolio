import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle, faReply, faTrash } from '@fortawesome/free-solid-svg-icons'

export const SingleMessage = ({ messageId, firstName, lastName, email, isRead, receivedAt, screenWidth }) => {
  if (screenWidth >= 640) {
    return (
      <div
        id={messageId}
        className=" flex items-center h-10 text-primary border-b-4 border-text-theme-primary hover:cursor-pointer"
      >
        <div className=" w-[3%] text-center">
          {!isRead && <FontAwesomeIcon icon={faCircle} className=" text-theme-primary text-[12px]" />}
        </div>
        <p className=" w-[27%] md:w-[17%] text-center">
          {firstName} {lastName}
        </p>
        <p className=" w-[40%] md:w-[35%] text-center">{email}</p>
        <p className=" w-[30%] md:w-[20%] text-center">{receivedAt.toDateString()}</p>
        {screenWidth >= 768 && <p className=" w-[15%] text-center">{isRead ? 'Read' : 'Unread'}</p>}
        {screenWidth >= 768 && (
          <div className=" w-[10%] text-center space-x-[15%]">
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
