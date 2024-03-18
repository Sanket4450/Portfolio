import { MenuItem } from '@mui/material'

export const MessageMenuItem = ({ itemId, text, onClick }) => {
  return (
    <MenuItem id={itemId} className=" space-x-2" onClick={(e) => onClick(e)}>
      {text}
    </MenuItem>
  )
}
