import { IconButton, Tooltip } from '@mui/material'
import { MarkEmailRead, MarkEmailUnread, Delete } from '@mui/icons-material'

export const FullMessageOptions = ({ isRead, setIsRead }) => {
  return (
    <div className=" flex justify-end space-x-0.5 mt-2">
      {isRead ? (
        <Tooltip title="Mark as Unread" onClick={() => setIsRead(false)}>
          <IconButton>
            <MarkEmailUnread className=" text-primary" />
          </IconButton>
        </Tooltip>
      ) : (
        <Tooltip title="Mark as read" onClick={() => setIsRead(true)}>
          <IconButton>
            <MarkEmailRead className=" text-primary" />
          </IconButton>
        </Tooltip>
      )}
      <Tooltip title="Delete">
        <IconButton>
          <Delete className=" text-primary" />
        </IconButton>
      </Tooltip>
    </div>
  )
}
