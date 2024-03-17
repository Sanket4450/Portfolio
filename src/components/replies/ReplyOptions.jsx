import { IconButton, Tooltip } from '@mui/material'
import { Delete } from '@mui/icons-material'

export const ReplyOptions = ({ selectedMessages }) => {
  return (
    <div>
      <div className=" h-10 flex justify-end items-center">
        {selectedMessages.length > 0 && (
          <Tooltip title="Delete">
            <IconButton>
              <Delete className=" text-primary" />
            </IconButton>
          </Tooltip>
        )}
      </div>
    </div>
  )
}
