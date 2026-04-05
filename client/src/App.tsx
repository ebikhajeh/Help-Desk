import { Routes, Route } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import Layout from './components/Layout'
import ProtectedRoute from './components/ProtectedRoute'

function Home() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold">Welcome to Help Desk</h1>
    </div>
  )
}

export default function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route element={<ProtectedRoute />}>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Route>
    </Routes>
  )
}
