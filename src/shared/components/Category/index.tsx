import { ChangeEvent } from 'react'
import { Box, FormControl, Radio, RadioGroup, Typography } from '@mui/material'
import { SvgIconComponent } from '@mui/icons-material'
import { TTransactionType } from '../../types'
import { useThemeContext } from '../../contexts'
import { getColor } from '../../functions'
import * as S from './style'

type Props = {
  category: string
  categories: {
    name: string
    icon: SvgIconComponent
  }[]
  type: TTransactionType
  handleChange(e: ChangeEvent<HTMLInputElement>): void
}

export const Category: React.FC<Props> = ({ 
  category, categories, type, handleChange 
}) => {
  const { theme } = useThemeContext()
  const color = type === 'Despesa' ? 
    theme.palette.error.main : theme.palette.primary.main

  return (
    <FormControl sx={S.style} fullWidth>
      <Typography component="label">Categoria</Typography>
      <RadioGroup value={category}>
        {categories.map(({ name, icon: Icon }, index) => (
          <Box 
            key={index} component="label" 
            sx={{ color: name !== category ? 'inherit' : color }}
          >
            <Radio 
              value={name} name="type" color={getColor(type)}
              onChange={handleChange}
              sx={{ display: 'none' }} 
            />
            <Icon />
            <Typography variant="caption">{name}</Typography>
          </Box>
        ))}
      </RadioGroup>
    </FormControl>
  )
}