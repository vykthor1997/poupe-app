import { Router } from './Router'
import { AuthProvider, ThemeProvider, TransactionProvider } from './shared/contexts'

const App: React.FC = () => (
  <ThemeProvider>
    <AuthProvider>
      <TransactionProvider>
        <Router />
      </TransactionProvider>
    </AuthProvider>
  </ThemeProvider>
)

export default App
