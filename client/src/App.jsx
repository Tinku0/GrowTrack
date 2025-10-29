import './App.css'
import SidebarLayout from './layouts/sidebarLayout';
import Dashboard from './pages/Dashboard';
import Login from './pages/login'
import Plants from './pages/Plants';
import Register from './pages/Register'
import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate replace to="/login" />} />
        <Route path='/login' element={<Login />}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route element={<SidebarLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/plants" element={<Plants />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
