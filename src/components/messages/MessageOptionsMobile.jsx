import { useState } from 'react'
import { IconButton, Menu, MenuItem } from '@mui/material'
import { MoreVert, MarkEmailRead, MarkEmailUnread, Delete, MailOutline, Sort } from '@mui/icons-material'
import { MessageMenuItem } from './MessageMenuItem'

export const MessageOptionsMobile = ({ selectedMessages }) => {
  const [infoAnchorEl, setInfoAnchorEl] = useState(null)
  const [sortAnchorEl, setSortAnchorEl] = useState(null)
  const [selectedInfoMenuItem, setSelectedInfoMenuItem] = useState(null)
  const [selectedSortMenuItem, setSelectedSortMenuItem] = useState(null)
  const infoOpen = Boolean(infoAnchorEl)
  const sortOpen = Boolean(sortAnchorEl)

  const handleInfoClick = (event) => {
    setInfoAnchorEl(event.currentTarget)
  }

  const handleSortClick = (event) => {
    setSortAnchorEl(event.currentTarget)
  }

   const handleInfoClose = (event) => {
     setInfoAnchorEl(null)
     setSelectedInfoMenuItem(event.target.id)
   }

  const handleSortClose = (event) => {
    setSortAnchorEl(null)
    setSelectedSortMenuItem(event.target.id)
  }

  return (
    <div className=" flex justify-end py-2">
      <div>
        <IconButton
          aria-label="more"
          id="long-button"
          aria-controls={sortOpen ? 'long-menu' : undefined}
          aria-expanded={sortOpen ? 'true' : undefined}
          aria-haspopup="true"
          onClick={handleSortClick}
        >
          <Sort className=" text-primary" />
        </IconButton>
        <Menu
          id="basic-menu"
          anchorEl={sortAnchorEl}
          open={sortOpen}
          onClose={handleSortClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
        >
          <MessageMenuItem itemId="newest" text="Newest First" onClick={handleSortClose} />
          <MessageMenuItem itemId="oldest" text="Oldest First" onClick={handleSortClose} />
          <MessageMenuItem itemId="name_asc" text="Name Ascending" onClick={handleSortClose} />
          <MessageMenuItem itemId="name_desc" text="Name Descending" onClick={handleSortClose} />
          <MessageMenuItem itemId="email_asc" text="Email Ascending" onClick={handleSortClose} />
          <MessageMenuItem itemId="email_desc" text="Email Descending" onClick={handleSortClose} />
          <MessageMenuItem itemId="unread" text="Unread" onClick={handleSortClose} />
        </Menu>
      </div>
      <div>
        <IconButton
          aria-label="more"
          id="long-button"
          aria-controls={infoOpen ? 'long-menu' : undefined}
          aria-expanded={infoOpen ? 'true' : undefined}
          aria-haspopup="true"
          onClick={handleInfoClick}
        >
          <MoreVert className=" text-primary" />
        </IconButton>
        <Menu
          id="basic-menu"
          anchorEl={infoAnchorEl}
          open={infoOpen}
          onClose={handleInfoClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
        >
          {selectedMessages.length > 0 && (
            <MenuItem className=" space-x-2" onClick={handleInfoClose}>
              <MarkEmailRead />
              <p>Mark as read</p>
            </MenuItem>
          )}
          {selectedMessages.length > 0 && (
            <MenuItem className=" space-x-2" onClick={handleInfoClose}>
              <MarkEmailUnread />
              <p>Mark as Unread</p>
            </MenuItem>
          )}
          {selectedMessages.length > 0 && (
            <MenuItem className=" space-x-2" onClick={handleInfoClose}>
              <Delete />
              <p>Delete</p>
            </MenuItem>
          )}
          <MenuItem className=" space-x-2" onClick={handleInfoClose}>
            <MailOutline />
            <p>Mark all as read</p>
          </MenuItem>
        </Menu>
      </div>
    </div>
  )
}
