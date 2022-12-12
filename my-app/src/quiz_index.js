import React, { Fragment } from "react";
import ReactDOM from "react-dom";

//import "./styles.css";
import Header from "./Components/Header";
import Quiz from "./Components/Quiz";

function App() {
  return (

    <Fragment>

      {/* header Components */}
        <Header />

      {/* Quiz Components */}
        <Quiz />
      
    </Fragment> 

  )
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);