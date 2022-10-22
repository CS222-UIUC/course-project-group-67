import "./App.css";
// importing components from react-router-dom package
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
  
// import Home component
import Home from "./pages/Home";
// import About component
import About from "./pages/About";
// import ContactUs component
import ContactUs from "./pages/ContactUs";
  
function App() {
  return (
    <>
      {/* This is the alias of BrowserRouter i.e. Router */}
      <Router>
        <Routes>
          {/* This route is for home component 
          with exact path "/", in component props 
          we passes the imported component*/}
          <Route path="/" component={Home} />
          {/* This route is for about component 
          with exact path "/about", in component 
          props we passes the imported component*/}
          <Route path="/about" component={About} />
            
          {/* This route is for contactus component
          with exact path "/contactus", in 
          component props we passes the imported component*/}
          <Route path="/contactus" component={ContactUs} />
            
          {/* If any route mismatches the upper 
          route endpoints then, redirect triggers 
          and redirects app to home component with to="/" */}
          <Navigate to="/" />
        </Routes>
      </Router>
    </>
  );
}
    
export default App;