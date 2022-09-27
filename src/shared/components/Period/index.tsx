import { MenuItem, Select, SelectChangeEvent, Stack } from '@mui/material'
import * as S from './style'

type Props = {
  month: string
  months: string[]
  year: string | number
  years: string[] | number[]
  handleMonthChange(e: SelectChangeEvent): void
  handleYearChange(e: SelectChangeEvent): void
}

export const Period: React.FC<Props> = ({ 
  month, months, year, years, 
  handleMonthChange, handleYearChange 
}) => {
  return (
    <Stack component="section" direction="row" sx={S.period}>
      <Select
        value={month}
        onChange={handleMonthChange}
      >
        {months.map(month => (
          <MenuItem key={month} value={month}>{month}</MenuItem>
        ))}
      </Select>
      <Select
        value={String(year)}
        onChange={handleYearChange}
      >
        {years.map(year => (
          <MenuItem key={year} value={year}>{year}</MenuItem>
        ))}
      </Select>
    </Stack>
  )
}
