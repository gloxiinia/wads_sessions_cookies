import React, {useEffect, useState} from 'react';
import { Link, useNavigate} from "react-router-dom";
import "./Cookies.css";

import JokerGun from "./joker-gun.png";

function Cookies() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    return (
      <div className="login">
          <picture>
            < img className="joker-gun" alt ="Joker Gun" src={JokerGun}/>
          </picture>
        <div className="login__container">
          <input
            type="text"
            className="login__textBox"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="E-mail Address"
          />
          <input
            type="password"
            className="login__textBox"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
          <button
            className="login__btn"
            // onClick={() => logInWithEmailAndPassword(email, password)}
          
          >
            Login
          </button>
          <button className="login__btn login__google" > 
            Login with Google
            <i className="fab fa-google" />
          </button>
          <div className='forgot-passwd'>
            <Link to="/cookies">Forgot Password</Link>
          </div>
          <div className="register-link">
            Don't have an account? <Link to="/cookies">Register</Link> now.
          </div>
        </div>
      </div>
    );
  }
export default Cookies;
