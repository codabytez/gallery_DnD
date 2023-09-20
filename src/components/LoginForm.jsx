// LoginForm.js
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const history = useHistory();
  const navigate = useNavigate();

  const handleLogin = () => {
    // For demonstration purposes, hard-coded credentials
    const correctEmail = "user@example.com";
    const correctPassword = "password123";

    if (email === correctEmail && password === correctPassword) {
      // Authentication successful, navigate to the gallery page
      navigate("/gallery");
    } else {
      // Authentication failed
      alert("Incorrect email or password. Please try again.");
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="button" onClick={handleLogin}>
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
