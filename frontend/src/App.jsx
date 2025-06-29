import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import RegisterForm from './RegisterForm';
import LoginForm from './LoginForm';
import ProtectedComponent from './ProtectedComponent';
import LogoutButton from './LogoutButton';

function App() {
  return (
    <Router>
      <nav>
        <Link to="/register">Register</Link>
        <Link to="/login">Login</Link>
        <Link to="/home">Home</Link>
        <Link to="/logout">LogOut</Link>
      </nav>
      <Routes>
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/home" element={<ProtectedComponent />} />
        <Route path="/logout" element={<LogoutButton />} />
      </Routes>
    </Router>
  );
}

export default App;
