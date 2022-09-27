import { useState } from 'react'
import { Box, IconButton, Menu as MatMenu, MenuItem } from '@mui/material'
import { Logout, Menu as MenuIcon } from '@mui/icons-material'
import { useTransactionContext } from '../../contexts'
import { logout } from '../../firebase'
import * as S from './style'

export const Menu: React.FC = () => {
  const { setUpdate } = useTransactionContext()
  const [ anchorEl, setAnchorEl ] = useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>): void => {
    setAnchorEl(event.currentTarget)
  }
   
  const handleClose = (): void => {
    setAnchorEl(null)
  }

  return (
    <Box component="span">
      <IconButton onClick={handleClick}>
        <MenuIcon />
      </IconButton>
      <MatMenu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        sx={S.menu}
      >
          <MenuItem onClick={async () => {
            await logout()
            setUpdate(true)
          }}>
            <Logout /> Logout
          </MenuItem>
      </MatMenu>
    </Box>
  )
}