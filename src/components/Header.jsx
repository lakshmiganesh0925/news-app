import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

function Header() {
  const navigate = useNavigate();
  const isAuthenticated = !!localStorage.getItem('user');

  const handleLogout = () => {
    localStorage.removeItem('user');
    toast.success('Logged out successfully!');
    navigate('/login');
  };

  return (
    <header className="header">
      <h1>News App</h1>
      <nav>
        <Link to="/">Home</Link>
        {isAuthenticated ? (
          <button onClick={handleLogout}>Logout</button>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        )}
      </nav>
    </header>
  );
}

export default Header;