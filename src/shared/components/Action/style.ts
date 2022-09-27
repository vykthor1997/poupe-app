import { SxProps, Theme } from '@mui/material'

export const action: SxProps<Theme> = {
  '& .MuiPaper-root': {
    minWidth: '280px'
  },
  '& .MuiDialogContent-root': {
    paddingBottom: 0
  },
  '& .MuiDialogActions-root': {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    margin: 2
  }
}

export const flex: SxProps<Theme> = {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
} 