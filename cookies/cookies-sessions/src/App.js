import logo from './logo.svg';
import React, {useEffect, useState} from 'react';
import { useCookies } from 'react-cookie';
import JokerGun from "./joker-gun.png";
import './App.css';

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [cookies, setCookie] = useCookies(["user"]);
  
  const handle_click = () => {
    setCookie("Username", username, { path: "/" }); 
    setCookie("Password", password, { path: "/" }); 
    window.location.reload(); 
 
  }

  return (
      <div className="login">
          <picture>
            < img className="joker-gun" alt ="Joker Gun" src={JokerGun}/>
          </picture>
        <div className="login__container">
          <input
            type="text"
            className="login__textBox"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
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
            onClick={handle_click}
          >
            Create a cookie!
          </button>
          <h2> Current cookie: </h2>
          {cookies.Username && (
            <div>
              <h2>Username: {cookies.Username}</h2>
            </div>
          )}

          {cookies.Password && (
            <div>
              <h2>Password: {cookies.Password}</h2>
            </div>
          )}
        </div>
      </div>
  );
}

export default App;
