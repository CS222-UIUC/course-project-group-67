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
        <div className={"block stats"}>
          <div className="text">
          <h1>The Stats</h1>
          <h2>Let's see your favs and not-so-favs</h2>
          <br></br>
          <h3>Hours Watched: 723</h3>
          <h3>Top TV Show: Jane the Virgin</h3>
          <h3>Top Movie: Crazy Rich Asians</h3>
          <h3>Top Genre: Mystery</h3>
          <h3>All Time Fav: Avengers: Infinity War</h3>
          </div>
        </div>
      </div>
    </div>
  );
};
  
export default Home;