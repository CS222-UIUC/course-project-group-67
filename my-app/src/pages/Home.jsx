import React from "react";
// importing Link from react-router-dom to navigate to 
// different end points.
import { Link } from "react-router-dom";
import logo from '../netflix.png';
import './Home.css';
  
const Home = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <br />
      <ul>
        <li>
          {/* Endpoint to route to Home component */}
          <Link to="/">Home</Link>
        </li>
        <li>
          {/* Endpoint to route to About component */}
          <Link to="/about">About</Link>
        </li>
        <li>
          {/* Endpoint to route to Contact Us component */}
          <Link to="/contactus">Contact Us</Link>
        </li>
      </ul>
      <div className="App">
        <div className="block home">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            welcome to netflix wrapped
          </p>
          <a
            className="App-link"
            href="https://www.netflix.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            click here to log in and get started
          </a>
        </header>
        </div>
      </div>
    </div>
  );
};
  
export default Home;