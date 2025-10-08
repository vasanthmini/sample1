import './Login.css';
import { Fragment, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock, faUser } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faGoogle, faTwitter } from "@fortawesome/free-brands-svg-icons"; 
import { useNavigate, Link } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  // State for form inputs
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  // State for error message
  const [error, setError] = useState('');

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = (e) => {
    e.preventDefault();

    const { username, password } = formData;

    // Demo credentials
    const demoUsername = "demo";
    const demoPassword = "1234";

    if (username === demoUsername && password === demoPassword) {
      alert("Login successful!");
      navigate('/home/Welcome');
    } else {
      setError("Invalid credentials. Please try again.");
    }
  };

  return (
    <Fragment>
      <div className='body'>
        <div className="login-container">
          <h2>Login</h2>
          <form className="login-form" onSubmit={handleLogin}>
            <div className="input-group">
              <input
                type="text"
                id="username"
                name="username"
                placeholder="Username"
                value={formData.username}
                onChange={handleChange}
                required
              />
              <FontAwesomeIcon icon={faUser} className="icon" />
            </div>

            <div className="input-group">
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                required
              />
              <FontAwesomeIcon icon={faLock} className="icon" />
            </div>

            {error && <p className="error">{error}</p>}

            <div className="input-for">
              <p><a href="#">Forgot Password?</a></p>
            </div>

            <button type="submit">Login</button>

            <div className="signup-link">
              <p>
                Don't have an account?{" "}
                <Link className="link" to="/signup">Sign Up</Link>
              </p>
            </div>

            <div className="input-or"><p className="or">Or </p></div>

            <div className="social-icons">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon className="font" icon={faFacebook} />
              </a>
              <a href="https://accounts.google.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon className="font" icon={faGoogle} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon className="font" icon={faTwitter} />
              </a>
            </div>
          </form>
        </div>
      </div>
    </Fragment>
  );
}

export default Login;
