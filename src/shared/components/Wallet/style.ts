import { SxProps, Theme } from '@mui/material'

export const wallet: SxProps<Theme> = {
  padding: 2,
  '& ul': {
    display: 'flex',
    flexDirection: 'column',
    rowGap: 1,
    '& li': {
      justifyContent: 'space-between',
      '& svg': {
        fontSize: '3.2em',
        position: 'relative',
        left: 8,
      }
    }
  }
}
