import { useNavigate } from 'react-router-dom'
import { IconButton, Tooltip } from '@mui/material'
import { MarkEmailRead, MarkEmailUnread, Delete, ArrowBack } from '@mui/icons-material'

export const FullMessageOptions = ({ isRead, setIsRead }) => {
  const navigate = useNavigate()

  return (
    <div className=" flex justify-between space-x-0.5 mt-2">
      <div>
        <Tooltip title="Back to Messages" onClick={() => navigate('/admin/messages')}>
          <IconButton>
            <ArrowBack className=" text-primary" />
          </IconButton>
        </Tooltip>
      </div>
      <div className=" flex space-x-0.5">
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
    </div>
  )
}
