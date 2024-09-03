import axios from "axios";
import React ,{useState} from "react";
import { useNavigate } from "react-router-dom";
import "../style/LoginPage.css"

const LoginPage = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const handleLogin = async() => {
   
    try {
      const response = await axios.post('http://192.168.99.141:5000/home', {
        username,
        password,
      });
      console.log('Response:', response);
      if (response.status === 200) {
        navigate('/insurance');
      }
    } catch (error) {
      setError('Invalid username or password'); 
    } 
    setUsername('');
    setPassword('');
  };

  return (
    <div className="loginPage">
      <div className="login-container">
      <h1>Sign in</h1>
      <div className="form-group">
        <input type="text" className="inputField" id="username" name="username" placeholder="Email Address"
        value={username}
        onChange={(e)=>setUsername(e.target.value)}/>
      </div>
      <div className="form-group">
        <input type="password" className="inputField" id="Password" name="Password" placeholder="Password"
        value={password}
        onChange={(e)=>setPassword(e.target.value)} />
      </div>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <h4>Default Email:test@test.com</h4>
      <h4>Default Password:12345</h4>
      <button type="submit" className="loginButton" onClick={handleLogin}>Submit</button>
      <a href="/register" className="loginLink"><h4>Register new account</h4></a>
      <a href="/forgotPassword" className="loginLink"><h4>Forgot password</h4></a>
      </div>
    </div>
  );
};

export default LoginPage;
