import { createContext, ReactNode, useContext } from 'react'
import { Box, CssBaseline, SxProps, Theme, ThemeProvider as MUIThemeProvider } from '@mui/material'
import { darkTheme } from '../themes'

const style: SxProps<Theme> = {
  width: '100vw', 
  height: '100vh', 
  display: 'flex', 
  flexDirection: 'column' 
}

type Props = {
  children: ReactNode
}

type TThemContext = {
  theme: Theme
}

const ThemeContext = createContext({} as TThemContext)

export const useThemeContext = () => useContext(ThemeContext)

export const ThemeProvider: React.FC<Props> = ({ children }) => {
  const theme = darkTheme
  const bgcolor = theme.palette.background.default
  
  return (
    <ThemeContext.Provider value={{ theme }}>
      <MUIThemeProvider theme={theme}>
        <CssBaseline />
        <Box sx={{ ...style, bgcolor }}>
          {children}
        </Box>
      </MUIThemeProvider>
    </ThemeContext.Provider>

  )
}
