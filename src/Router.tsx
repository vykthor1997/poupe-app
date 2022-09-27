import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Dashboard, Login, Post, Register } from './pages'
import { PrivateRoute } from './shared/contexts/AuthContext'

export const Router: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/" element={<PrivateRoute />}>
        <Route path="/" element={<Dashboard />} />
      </Route>
      <Route path="/post/:method" element={<PrivateRoute />}>
        <Route path="/post/:method" element={<Post />} />
      </Route>
    </Routes>
  </BrowserRouter>
)
