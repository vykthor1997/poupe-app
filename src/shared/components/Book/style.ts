import { SxProps, Theme } from '@mui/material'

export const book: SxProps<Theme> = {
  padding: 2, 
  '& h2': {
    textAlign: 'center'
  },
  '& li': {
    marginBottom: 1,
    justifyContent: 'space-between',
    cursor: 'pointer',
    '& p': {
      display: 'flex', 
      alignItems: 'center',
      '& svg': {
        marginRight: 1,
        border: 'solid 1px',
        padding: .2,
        borderRadius: 1
      }
    }
  }, 
  '& hr': {
    marginBottom: 1
  }
}
