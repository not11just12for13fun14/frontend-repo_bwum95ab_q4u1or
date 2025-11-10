import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Landing from './pages/Landing'
import Dashboard from './pages/Dashboard'
import Claim from './pages/Claim'
import Badges from './pages/Badges'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}> 
        <Route index element={<Landing />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/claim" element={<Claim />} />
        <Route path="/badges" element={<Badges />} />
      </Route>
    </Routes>
  )
}
