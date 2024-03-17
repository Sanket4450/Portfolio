import { useState } from 'react'
import { IconButton, Menu, MenuItem } from '@mui/material'
import { MoreVert, MarkEmailRead, MarkEmailUnread, Delete, MailOutline } from '@mui/icons-material'

export const MessageOptionsMobile = ({ selectedMessages }) => {
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <div className=" flex justify-end py-2">
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? 'long-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVert className=" text-primary" />
      </IconButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        {selectedMessages.length > 0 && (
          <MenuItem className=" space-x-2" onClick={handleClose}>
            <MarkEmailRead />
            <p>Mark as read</p>
          </MenuItem>
        )}
        {selectedMessages.length > 0 && (
          <MenuItem className=" space-x-2" onClick={handleClose}>
            <MarkEmailUnread />
            <p>Mark as Unread</p>
          </MenuItem>
        )}
        {selectedMessages.length > 0 && (
          <MenuItem className=" space-x-2" onClick={handleClose}>
            <Delete />
            <p>Delete</p>
          </MenuItem>
        )}
        <MenuItem className=" space-x-2" onClick={handleClose}>
          <MailOutline />
          <p>Mark all as read</p>
        </MenuItem>
      </Menu>
    </div>
  )
}
