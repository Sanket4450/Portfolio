import { Box, TextField } from '@mui/material'

export const MesageReplyInput = ({ inputKey, inputRows, inputName }) => {
  return (
    <div className=" py-2 px-2 space-y-2.5">
      <p className=" bg-text-theme-primary text-bg-primary text-lg font-semibold rounded-md px-2">{inputKey}</p>
      <Box
        component="form"
        sx={{
          '& > :not(style)': { width: '100%' },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          multiline={true}
          rows={inputRows}
          variant="outlined"
          name={inputName}
          autoComplete="off"
          sx={{
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: 'var(--text-primary)',
              },
              '&:hover fieldset': {
                borderColor: 'var(--text-primary)',
              },
              '&.Mui-focused fieldset': {
                borderColor: 'var(--text-theme-primary)',
              },
            },
            '& .MuiInputLabel-root.Mui-focused': {
              color: 'var(--text-theme-primary)',
            },
            '& > :not(style)': { color: 'var(--text-primary)', padding: '12px 15px' },
          }}
        />
      </Box>
    </div>
  )
}
