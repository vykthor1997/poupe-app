import { Box, Button, Divider, FormControl } from '@mui/material'
import { AttachMoney } from '@mui/icons-material'
import { Header, Loader, Note, Notification, Type } from '../../shared/components'
import { usePost } from '../../shared/hooks'
import * as S from './style'

export const Post: React.FC = () => {
  const {
    title, color, 
    type, handleTypeChange,
    borderColor, transaction, 
    handleDateChange, handleClose, handleSubmit,
    loader, message
  } = usePost()

  return (
    <Box sx={S.post}>
      <Header title={title} comeBack={true} color={color}>
        <AttachMoney color={color} fontSize="large" />
      </Header>
      <Divider />
      <Box 
        component="form" borderColor={`${borderColor} !important`}
        onSubmit={handleSubmit}
      >
        <Type type={type} handleTypeChange={handleTypeChange} />
        <Divider />
        <Note 
          transaction={transaction} color={color} 
          handleDateChange={handleDateChange} />
        <Divider />
        <FormControl fullWidth>
          <Button type="submit" variant="contained" color={color}>
            Salvar
          </Button>
        </FormControl>
      </Box>
      <Loader open={loader} color={color} />
      <Notification message={message} handleClose={handleClose} />
    </Box>
  )
}
