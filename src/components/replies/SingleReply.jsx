import { Checkbox } from '@mui/material'

export const SingleReply = ({ replyId, subject, description, isRead, sentAt, isSelected, handleSelection }) => {
  return (
    <div
      id={replyId}
      className={` bg-gray-weak-extra py-2 flex text-primary border-4 border-text-theme-primary rounded-md ${isRead} ? 'font-light' : 'font-semibold'`}
    >
      <div className=" w-10 flex justify-center items-start">
        <Checkbox
          id={String(replyId)}
          sx={{
            color: 'var(--text-theme-primary)',
            '&.Mui-checked': {
              color: 'var(--text-theme-hover-primary)',
            },
          }}
          checked={isSelected}
          onChange={() => handleSelection(replyId)}
        />
      </div>
      <div className=" space-y-2" style={{ width: 'calc(100% - 48px)' }}>
        <div className=" space-y-2">
          <p className=" bg-text-theme-primary text-bg-primary text-lg font-semibold rounded-md px-2">Subject</p>
          <p className=" bg-greenGray text-black rounded-md px-2">{subject}</p>
        </div>
        <div className=" space-y-2">
          <p className=" bg-text-theme-primary text-bg-primary text-lg font-semibold rounded-md px-2">Description</p>
          <p className=" bg-greenGray text-black rounded-md px-2">{description}</p>
        </div>
        <p className=" flex justify-end text-sm font-semibold rounded-sm px-2 py-0.5">{sentAt.toDateString()}</p>
      </div>
    </div>
  )
}
