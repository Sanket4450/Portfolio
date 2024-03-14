import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReply, faTrash } from '@fortawesome/free-solid-svg-icons'

export const SingleMessage = ({ messageId, firstName, lastName, email, isRead, receivedAt, screenWidth }) => {
  if (screenWidth >= 640) {
    return (
      <div
        id={messageId}
        className=" flex items-center h-10 text-primary border-b-4 border-text-theme-primary hover:cursor-pointer"
      >
        <p className=" w-[25%] md:w-[20%] text-center">
          {firstName} {lastName}
        </p>
        <p className=" w-[30%] text-center">{email}</p>
        <p className=" w-[30%] md:w-[25%] text-center">{receivedAt.toDateString()}</p>
        <p className=" w-[15%] text-center">{isRead ? 'Read' : 'Unread'}</p>
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
        <div className=" pr-3 phone:h-[85%] max-phone:w-full flex phone:flex-col justify-between max-phone:items-center text-center">
          <p className=" text-sm max-phone:ml-3">{receivedAt.toDateString()}</p>
          <p className=" bg-text-theme-hover-primary max-phone:px-4 max-phone:py-1 max-phone:mr-1 text-center font-semibold text-sm rounded-lg">
            {isRead ? 'Read' : 'Unread'}
          </p>
        </div>
      </div>
    )
  }
}
