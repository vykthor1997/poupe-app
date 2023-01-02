import { Link } from 'react-router-dom'
import { Box, Divider } from '@mui/material'
import { AddCircle, Dashboard as DashboardIcon } from '@mui/icons-material'
import { Action, Book, Header, Loader, Notification, Period, Wallet } from '../../shared/components'
import { useDashboard } from '../../shared/hooks'
import { months } from '../../shared/states'
import * as S from './style'

export const Dashboard: React.FC = () => {
  const {
    month, handleMonthChange,
    year, handleYearChange,
    wallet, transactions,
    transaction, handleActionClick,
    handleClose, handleUpdate, handleDelete, handleNavigate,
    loader, message
  } = useDashboard()

  return (
    <Box sx={S.dashboard}>
      <Header title="Dashboard">
        <DashboardIcon color="warning" fontSize="large" />
      </Header>
      <Divider />
      <Box component="main">
        <Period 
          month={month} months={months} handleMonthChange={handleMonthChange}
          year={year} years={[2022, 2023]} handleYearChange={handleYearChange}
        />
        <Wallet wallet={wallet} />
        <Book 
          transactions={transactions}
          handleClick={handleActionClick} 
        />
      </Box>
      <Link to="/post/adicionar" onClick={handleNavigate}>
        <AddCircle fontSize="large" />
      </Link>
      <Action 
        transaction={transaction} 
        handleClose={handleClose}
        handleUpdate={handleUpdate}  
        handleDelete={handleDelete}
      />
      <Loader open={loader} />
      <Notification message={message} handleClose={handleClose} />
    </Box>
  )
}
