import { Checkbox } from '@mui/material'

export const SingleMessage = ({
  messageId,
  firstName,
  lastName,
  email,
  subject,
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
        className={` bg-gray-weak-extra flex items-center h-10 text-primary border-b-4 border-text-theme-primary hover:cursor-pointer ${
          isRead ? 'font-light' : 'font-semibold'
        }`}
      >
        <div className=" w-[4%] lg:w-[3%] flex justify-center">
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
        <div className=" w-[22%] xl:w-[17%] flex justify-center">
          <p className=" w-[95%] max-tab:text-sm text-center whitespace-nowrap overflow-hidden">
            {firstName} {lastName}
          </p>
        </div>
        <div className=" w-[50%] xl:w-[30%] flex justify-center">
          <p className=" max-tab:text-sm text-center">{email}</p>
        </div>
        {screenWidth >= 1280 && (
          <div className="  w-[35%] flex justify-center">
            <p className="w-[95%] max-tab:text-sm whitespace-nowrap overflow-hidden">{subject}</p>
          </div>
        )}
        <p className=" w-[24%] lg:w-[25%] xl:w-[15%] max-tab:text-sm text-center">{receivedAt.toDateString()}</p>
      </div>
    )
  } else {
    return (
      <div
        id={messageId}
        className=" h-28 phone:h-[78px] flex max-phone:flex-col phone:items-center justify-around phone:justify-between bg-gray-weak-extra border-4 border-text-theme-primary text-primary rounded-md hover:cursor-pointer"
      >
        <div className=" flex">
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
          <div className=" overflow-scroll">
            <p className={` text-2xl phone:text-[22px] ${isRead ? 'font-light' : 'font-semibold'}`}>
              {firstName} {lastName}
            </p>
            <p className={` ${isRead ? 'font-light' : 'font-semibold'} phone:text-[14px]`}>{email}</p>
          </div>
        </div>
        <div className=" pr-3 phone:h-[85%] max-phone:w-[95%] max-phone:mx-auto max-phone:bg-gray-weak rounded-sm py-0.5 flex phone:flex-col justify-between max-phone:items-center text-center">
          <p className={` text-sm phone:mt-1 max-phone:ml-2 ${isRead ? 'font-light' : 'font-semibold'}`}>
            {receivedAt.toDateString()}
          </p>
        </div>
      </div>
    )
  }
}
