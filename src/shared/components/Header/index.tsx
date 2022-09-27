import { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { Box, Stack, Typography } from '@mui/material'
import { ArrowBack } from '@mui/icons-material'
import { Menu } from '../'
import { TTypeColor } from '../../types'
import * as S from './style'

type Props = {
  title: string
  children: ReactNode
  comeBack?: boolean
  color?: TTypeColor
}

export const Header: React.FC<Props> = ({ title, children, comeBack, color }) => {
  return (
    <Stack component="header" sx={S.header}>
      <Box>
        {children}
        <Typography component="h1" variant="h5">
          {title}
        </Typography>
      </Box>
      {comeBack ? (
        <Link to="/">
          <ArrowBack color={color} fontSize="large" />
        </Link>
      ) : (
        <Menu />
      )}
    </Stack>
  )
}
