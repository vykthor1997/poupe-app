import { SxProps, Theme } from '@mui/material'

export const dashboard: SxProps<Theme> = {
  overflowX: 'auto',
  '& main': {
    padding: 2,
    display: 'flex',
    flexDirection: 'column',
    rowGap: 2
  },
  '& a': {
    color: 'inherit',
    position: 'fixed',
    bottom: 2,
    right: 20
  }
}
