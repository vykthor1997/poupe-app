import { FormControl, TextField } from '@mui/material'
import { Dayjs } from 'dayjs'
import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker'
import { TTransaction, TTypeColor } from '../../types'
import * as S from './style'

type Props = {
  transaction: TTransaction
  color: TTypeColor
  handleDateChange(e: Dayjs | null): void
}

export const Note: React.FC<Props> = ({ transaction, color, handleDateChange }) => {
  return (
    <FormControl sx={S.note} fullWidth>
      <TextField 
        name="description" label="Descrição"
        defaultValue={transaction.description}
        color={color}
      >
        Descrição
      </TextField>
      <TextField 
        name="value" label="Valor" type="number" inputMode="numeric"
        defaultValue={transaction.value == 0 ? '' : transaction.value} 
        inputProps={{ step: 'any', min: '0' }}
        color={color}
      >
        Valor
      </TextField>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DesktopDatePicker
            label="Data"
            inputFormat="DD/MM/YYYY"
            value={transaction.date}
            onChange={handleDateChange}
            renderInput={(params) => <TextField {...params} color={color} />}
          />
        </LocalizationProvider>
    </FormControl>
  )
}