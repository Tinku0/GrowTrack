import './App.css'
import Login from './pages/login'
import Register from './pages/Register'
import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate replace to="/login" />} />
        <Route path='/login' element={<Login />}></Route>
        <Route path='/register' element={<Register />}></Route>
      </Routes>
    </Router>
  )
}

export default App
