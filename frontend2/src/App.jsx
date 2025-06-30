import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignIn from '../components/SignIn'
import SignUp from '../components/SignUp'
import Home from '../components/Home'
import PrivateRoute from "../components/PrivateRoute";
import './App.css'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/" element={<SignIn />} />
        <Route path="/home" element={<PrivateRoute><Home /></PrivateRoute>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
