import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignIn from '../components/SignIn'
import SignUp from '../components/SignUp'
import Home from '../components/Home'
import Userlist from '../components/UserList'
import Forgetpass from '../components/forgetpass'
import PrivateRoute from "../components/PrivateRoute";
import './App.css'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/" element={<SignIn />} />
        <Route path="/userlist" element={<Userlist />} />
        {/* <Route path="/forgetpass" element={<Forgetpass />} /> */}
        <Route path="/home" element={<PrivateRoute><Home /></PrivateRoute>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App