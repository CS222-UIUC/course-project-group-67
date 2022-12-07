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
            <img style={{width: 1300, height: 383, borderRadius: 8,}} src="https://via.placeholder.com/1300x383"/>
            <p style={{width: 440, height: 104, fontSize: 140, lineHeight: '100%', textAlign: 'center', color: 'rgba(223.12, 14.88, 14.88, 1)',}}>WRAPPED</p>
            <p style={{width: 1668, height: 157, fontSize: 100, lineHeight: '100%', textAlign: 'center', color: 'white',}}>Welcome, Anwesha Mishra</p>
          </a>
        </header>
        </div>
      </div>
    </div>
  );
};
  
export default Home;