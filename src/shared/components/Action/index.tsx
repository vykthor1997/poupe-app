import { ArrowBack } from '@mui/icons-material'
import { DialogContent, Stack, Typography } from '@mui/material'
import { Button, Dialog, DialogActions, useMediaQuery, useTheme } from '@mui/material'
import { formatCurrency } from '../../functions'
import { TTransaction, TTypeColor } from '../../types'
import * as S from './style'

type Props = {
  transaction: TTransaction | undefined
  handleClose(): void
  handleUpdate(): void
  handleDelete(): void
}

export const Action: React.FC<Props> = ({ transaction, handleClose, handleUpdate, handleDelete }) => {
  const open = Boolean(transaction)
  const theme = useTheme()
  const fullScreen = useMediaQuery(theme.breakpoints.down('xs'))
  const color: TTypeColor = transaction?.type === 'Despesa' ? 'error' : 'primary'
  return (
    <Dialog 
      fullScreen={fullScreen} open={open} 
      onClose={handleClose} sx={S.action}
    >
        <DialogContent>
          <Stack component="header" sx={S.flex}>
            <Typography component="h3" variant="h6">
              {transaction?.type}
            </Typography>
            <ArrowBack 
              onClick={handleClose} color={color} fontSize="large" 
            />
          </Stack>
          <Stack className="content" sx={{ ...S.flex, marginTop: 2 }}>
            <Typography component="p">
              {transaction?.description}
            </Typography>
            <Typography component="p">
              {formatCurrency(transaction?.value as number)}
            </Typography>
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button variant="contained" color="warning" onClick={handleUpdate}>
            Editar
          </Button>
          <Button variant="contained" color="error" onClick={handleDelete}>
            Excluir
          </Button>
        </DialogActions>
      </Dialog>
  )
}
