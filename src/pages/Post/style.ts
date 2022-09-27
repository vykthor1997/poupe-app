import { SxProps, Theme } from '@mui/material'

export const post: SxProps<Theme> = {
  '& form': {
    margin: 2,
    border: 1,
    '& button': {
      margin: 2,
    }
  }
}
