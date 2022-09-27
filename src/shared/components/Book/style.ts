import { SxProps, Theme } from '@mui/material'

export const book: SxProps<Theme> = {
  padding: 2, 
  '& h2': {
    textAlign: 'center'
  },
  '& li': {
    marginBottom: 1,
    justifyContent: 'space-between',
    cursor: 'pointer'
  }, 
  '& hr': {
    marginBottom: 1
  }
}
