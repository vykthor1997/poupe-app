import { Box, Card, Divider, List, ListItem, Paper, Typography } from '@mui/material'
import { useThemeContext } from '../../contexts'
import { formatCurrency, formatTransactionsBook, getCategoryIcon } from '../../functions'
import { TTransaction } from '../../types'
import * as S from './style'

type Props = {
  transactions: TTransaction[]
  handleClick(transaction: TTransaction): void
}

export const Book: React.FC<Props> = ({ transactions, handleClick }) => {
  if (transactions.length === 0) 
    return (
      <Paper component="section" sx={S.book}>
        Sem lançamentos neste mês
      </Paper>
    )

  const { theme } = useThemeContext()
  const transactionsBook = formatTransactionsBook(transactions)
  const getBackgroundColor = (type: string) => type === 'Despesa' ?
      theme.palette.error.dark : theme.palette.primary.dark

  return (
    <Paper component="section" sx={S.book}>
      {transactionsBook.map(transaction => (
        <Card key={transaction.date}>
          <Typography component="h2" variant="body2" color="ButtonHighlight">
            {transaction.date}
            {transaction.total < 0 ? ' - ' : ' + '}
            {formatCurrency(Math.abs(transaction.total))}
          </Typography>
          <List>
            {transaction.transactions.map((transaction, index) => {
              const { description, value, type, category } = transaction
              const Icon = getCategoryIcon(category)
              return (
                <ListItem 
                  key={index} 
                  sx={{ backgroundColor: getBackgroundColor(type)}}
                  onClick={() => handleClick(transaction)}
                >
                  <Typography>
                    <Icon />
                    {description}
                  </Typography>
                  <Typography variant="h6">{formatCurrency(value)}</Typography>
                </ListItem>
              )
            })}
          </List>
          <Divider />
        </Card>
      ))}
    </Paper>
  )
}
