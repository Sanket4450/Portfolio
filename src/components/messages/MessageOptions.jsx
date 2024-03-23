import { useState } from 'react'
import { IconButton, Tooltip, Menu } from '@mui/material'
import { MarkEmailRead, MarkEmailUnread, Delete, MailOutline, Sort } from '@mui/icons-material'
import { MessageMenuItem } from './MessageMenuItem'

export const MessageOptions = ({ selectedMessages }) => {
  const [anchorEl, setAnchorEl] = useState(null)
  const [selectedMenuItem, setSelectedMenuItem] = useState(null)
  const open = Boolean(anchorEl)

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = (event) => {
    setAnchorEl(null)
    setSelectedMenuItem(event.target.id)
  }

  return (
    <div className=" flex justify-end space-x-1 py-2">
      <div>
        <IconButton
          aria-label="more"
          id="long-button"
          aria-controls={open ? 'long-menu' : undefined}
          aria-expanded={open ? 'true' : undefined}
          aria-haspopup="true"
          onClick={handleClick}
        >
          <Sort className=" text-primary" />
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
          <MessageMenuItem itemId="newest" text="Newest First" onClick={handleClose} />
          <MessageMenuItem itemId="oldest" text="Oldest First" onClick={handleClose} />
          <MessageMenuItem itemId="name_asc" text="Name Ascending" onClick={handleClose} />
          <MessageMenuItem itemId="name_desc" text="Name Descending" onClick={handleClose} />
          <MessageMenuItem itemId="email_asc" text="Email Ascending" onClick={handleClose} />
          <MessageMenuItem itemId="email_desc" text="Email Descending" onClick={handleClose} />
          <MessageMenuItem itemId="unread" text="Unread" onClick={handleClose} />
        </Menu>
      </div>
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
  )
}
