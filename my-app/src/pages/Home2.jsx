import React from "react";
import { Link } from "react-router-dom";
import logo from '../netflix.png';
import './Home2.css';
  
const Home2 = () => {

  const uploadCSV = () => {
    // other team members will implement backend
  };

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
        </header>
          <p>
            a little bit about how this works:
          </p>
          <p>
            our site takes your netflix watch history and compiles different statistics to help you understand and visualize your watching habits—it even recommends new ideas for your watch list. 
          </p>
          <p>
            to get started, visit the following link, login to your netlix account, scroll to the bottom and click "download all", then upload your file below. happy streaming!
          </p>
          <a
            className="App-link"
            href="https://www.netflix.com/settings/viewed/NIU4LZZMKBHY5MG7SBBBTMA3XM"
            target="_blank"
            rel="noopener noreferrer"
            >
            click here to download your viewing activity
          </a>
        <button type="button" onClick={uploadCSV}>
        click here to upload your file
        </button>
        </div>
      </div>
    </div>
  );
};
  
export default Home2;