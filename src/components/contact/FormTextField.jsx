import { Box, TextField } from '@mui/material'

export const FormTextField = ({ width, label, name, value, onChange, onBlur, helperText, multiline }) => {
  return (
    <Box
      sx={{
        '& > :not(style)': { width },
      }}
      noValidate
      autoComplete="off"
      overflow="hidden"
    >
      <TextField
        multiline={multiline}
        rows={5}
        variant="outlined"
        label={label}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        helperText={helperText}
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
          '& .MuiFormHelperText-root': {
            color: 'var(--gray-strong)', // Helper text color
            fontSize: '14px', // Example additional style for font size
            marginLeft: 0,
          },
          '& .MuiFormHelperText-contained': {
            marginTop: '5px', // Example additional style for contained helper text
          },
          '& > :not(style)': { color: 'var(--text-primary)' },
        }}
      />
    </Box>
  )
}
