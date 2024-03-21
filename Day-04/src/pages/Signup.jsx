import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import { Link } from 'react-router-dom';
import '../assets/styles/Signup.css'


function Signup() {

     const [userName, setName] = useState('');
     const [email, setEmail] = useState('');
     const [password, setPassword] = useState('');
     const [confirmPassword, setConfirmPassword] = useState('');
     const [errors, setErrors] = useState({});
     const nav=useNavigate();
     const details={userName,email,password};
    
    const handleSubmit = (e) => {
    e.preventDefault();
    console.log(details);
    const validationErrors = {};

    if (!userName.trim()) {
      validationErrors.userName = "Username is required";
        }
    if (!email.trim()) {
      validationErrors.email = "Email is required";
        } 
        else if (!/\S+@\S+\.\S+/.test(email)) {
      validationErrors.email = "Email is not valid";
         }
    if (!password.trim()) {
      validationErrors.password = "Password is required";
         } 
         else if (password.length < 6) {
      validationErrors.password = "Password should be at least 6 characters";
         }
    if (confirmPassword !== password) {
      validationErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
        nav('/login') ;
     
    }
  };
  return (
    <div className='wrapper bg2'>
    <div className='container' id='main2'>
      <div className='row' id="signup2">
      
        <div className='col-md-6 right2'>
            <div className='input-box2'>
                 <header className='header2'>Sign Up</header>
                   <div className='input-field2'>
                   <input
                   type="text"
                   className='input2'
                   value={userName}
                   onChange={(e) => setName(e.target.value)}
                   placeholder="Username"
                 />
                 <h6 className='error2'>{errors.userName && <span>{errors.userName}</span>}</h6>

           </div>
                 <div className='input-field2'>
                 <input
                     type="email"
                     className='input2'
                     value={email}
                     onChange={(e) => setEmail(e.target.value)}
                     placeholder="Email"
                 />
                 <h6 className='error2'>{errors.email && <span>{errors.email}</span>}</h6>
          </div>
           <div className='input-field2'>
                 <input
                     type="password"
                     className='input2'
                     value={password}
                     onChange={(e) => setPassword(e.target.value)}
                     placeholder="Password"
                 />
                 <h6 className='error2'>{errors.password && <span>{errors.password}</span>}</h6>

           </div>
         
           <div className='input-field2'>
                 <input
            type="password"
            className='input2'
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirm Password"
          />
          <h6 className='error2'>{errors.confirmPassword && <span>{errors.confirmPassword}</span>}</h6>

           </div>
           <div className='input-field2'>
             <input type='submit'  onClick={handleSubmit} className='submit2' value="Sign Up"/>
            
           </div>
           <div className='signin2'>
                            <h6>Already have a account ?<Link to="/login">Log in here</Link></h6>                       
                      </div>
                  
            </div>
        </div>
      </div>
    </div>
</div>
  )
}

export default Signup;