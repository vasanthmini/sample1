import "./Login.css";
import { Fragment} from "react";
import { useNavigate,Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock, faUser,faEnvelope } from "@fortawesome/free-solid-svg-icons";

function Signup() {
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();

    const username = " ";
    const email = " ";
    const password = " ";

    if (username && email && password) {
      alert("Signup successful!");
    } else {
      alert("Please fill in all fields.");
      return;
    }

    navigate("/home/Welcome");
  };

  return (
    <Fragment>
      <div className="body">
        <div className="signup-container">
          <h2>Signup</h2>
          <form className="signup-form" onSubmit={handleSignup}>
            <div className="input-group">
              <input type="text" placeholder="UserName" required />
              <FontAwesomeIcon icon={faUser} className="icon" />
            </div>

            <div className="input-group">
              <input type="email" placeholder="Email" required />
              <FontAwesomeIcon icon={faEnvelope} className="icon" />
            </div>
            <div className="input-group">
              <input type="password" placeholder="Password" required />
              <FontAwesomeIcon icon={faLock} className="icon" />
            </div>
            <button type="submit">Sign Up</button>

            <p className="terms">
              Already have an account?
              <Link className="link" to="/login">
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </Fragment>
  );
}

export default Signup;
