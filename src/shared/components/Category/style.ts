import { SxProps, Theme } from '@mui/material'

export const style: SxProps<Theme> = {
  padding: 2,
  '& .MuiFormGroup-root': {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    marginTop: 1,
    gap: 1,
    '& label': {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      border: '1px solid',
      padding: .5,
      borderRadius: 1,
    }
  }
}
