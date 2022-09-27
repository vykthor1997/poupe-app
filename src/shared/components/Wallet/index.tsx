import { Box, List, ListItem, Paper, Typography } from '@mui/material'
import { AttachMoney, ArrowUpward, ArrowDownward } from '@mui/icons-material'
import { useThemeContext } from '../../contexts'
import { formatCurrency } from '../../functions'
import * as S from './style'

type Props = {
  wallet: {
    balance: number
    incomes: number
    expenses: number
  }
}

export const Wallet: React.FC<Props> = ({ wallet: { balance, incomes, expenses } }) => {
  const { theme } = useThemeContext()

  return (
    <Paper component="section" sx={S.wallet}>
      <List>
        <ListItem sx={{ backgroundColor: theme.palette.success.dark }}>
          <Box>
            <Typography component="h2" variant="caption">
              Saldo
            </Typography>
            <Typography component="p" variant="h5">
              {formatCurrency(balance)}
            </Typography>
          </Box>
          <AttachMoney />
        </ListItem>
        <ListItem sx={{ backgroundColor: theme.palette.primary.dark }}>
          <Box>
            <Typography component="h2" variant="caption">
              Receitas
            </Typography>
            <Typography component="p" variant="h5">
              {formatCurrency(incomes)}
            </Typography>
          </Box>
          <ArrowUpward />
        </ListItem>
        <ListItem sx={{ backgroundColor: theme.palette.error.dark }}>
          <Box>
            <Typography component="h2" variant="caption">
              Despesas
            </Typography>
            <Typography component="p" variant="h5">
              {formatCurrency(expenses)}
            </Typography>
          </Box>
          <ArrowDownward />
        </ListItem>
      </List>
    </Paper>
  )
}
