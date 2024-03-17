import { IconButton, Tooltip } from '@mui/material'
import { MarkEmailRead, MarkEmailUnread, Delete, MailOutline } from '@mui/icons-material'

export const MessageOptions = ({ selectedMessages }) => {
  return (
    <div>
      <div className=" flex justify-end space-x-1 py-2">
        {selectedMessages.length > 0 && (
          <Tooltip title="Mark as read">
            <IconButton>
              <MarkEmailRead className=" text-primary" />
            </IconButton>
          </Tooltip>
        )}
        {selectedMessages.length > 0 && (
          <Tooltip title="Mark as Unread">
            <IconButton>
              <MarkEmailUnread className=" text-primary" />
            </IconButton>
          </Tooltip>
        )}
        {selectedMessages.length > 0 && (
          <Tooltip title="Delete">
            <IconButton>
              <Delete className=" text-primary" />
            </IconButton>
          </Tooltip>
        )}
        <Tooltip title="Mark all as read">
          <IconButton>
            <MailOutline className=" text-primary" />
          </IconButton>
        </Tooltip>
      </div>
    </div>
  )
}
