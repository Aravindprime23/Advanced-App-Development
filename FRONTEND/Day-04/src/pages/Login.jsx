import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../assets/styles/Login.css'

function Login() {
  
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});
    const nav=useNavigate();
    const handleSubmit = (e) => {
      e.preventDefault();
      const validationErrors = {};
  
      if (!email.trim()) {
        validationErrors.email = "Email is required";
      } else if (!/\S+@\S+\.\S+/.test(email)) {
        validationErrors.email = "Email is not valid";
      }
      if (!password.trim()) {
        validationErrors.password = "Password is required";
      } else if (password.length < 6 || password.length>15) {
        validationErrors.password = "Password should be at least 6 characters";
      }
  
      setErrors(validationErrors);
  
      if (Object.keys(validationErrors).length === 0) {
        if (email === 'admin@gmail.com' && password === 'admin@123') {
          nav('/admin');
        } else {
          nav('/');
          }
    }
  }
  return (
    <div className='wrapper bg1'>
        <div className='container' id="main1">
          <div className='row' id="login1">
            <div className='col-md-6 right1'>
                <div className='input-box1'>
                     <header className='header1'>Create account</header>
                      <div className='input-field1'>
                            <input
                                type="email"
                                className='input1'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Email"
                            />
                            <h6 className='error1'>{errors.email && <span>{errors.email}</span>}</h6>
                     </div>
                      <div className='input-field1'>
                            <input
                                type="password"
                                className='input1'
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Password"
                            />
                            <h6 className='error1'>{errors.password && <span>{errors.password}</span>}</h6>

                      </div>
                      <div className='input-field1'>

                        <input type='submit'  onClick={handleSubmit} className='submit1' value="Sign In"/>
                       
                      </div>
                      <div className='signin1'>
                            <h6>No account ? <Link to="/signup">Sign Up here</Link></h6>                
                      </div>
                </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Login