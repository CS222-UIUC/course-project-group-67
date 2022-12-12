import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";
import Analysis from './Analysis';

function App() {
  const [file, setFile] = useState();
  const [array, setArray] = useState([]);

  const fileReader = new FileReader();

  const handleOnChange = (e) => {
    setFile(e.target.files[0]);
  };

  const csvFileToArray = string => {
    const csvHeader = string.slice(0, string.indexOf("\n")).split(",");
    const csvRows = string.slice(string.indexOf("\n") + 1).split("\n");

    const array = csvRows.map(i => {
      const values = i.split(",");
      const obj = csvHeader.reduce((object, header, index) => {
        object[header] = values[index];
        return object;
      }, {});
      return obj;
    });

    setArray(array);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    if (file) {
      fileReader.onload = function (event) {
        const text = event.target.result;
        csvFileToArray(text);
      };

      fileReader.readAsText(file);
    }
  };

  const headerKeys = Object.keys(Object.assign({}, ...array));

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Welcome to Netflix Wrapped</h1>
      <p>
        a little bit about how this works:
      </p>
      <p>
        our site takes your netflix watch history and compiles different statistics to help you understand and visualize your watching habits—it even recommends new ideas for your watch list. 
      </p>
      <p>
        to get started, visit the following link, login to your netflix account, scroll to the bottom and click "download all", then upload your file below. happy streaming!
      </p>
      <a
        className="App-link"
        href="https://www.netflix.com/settings/viewed/NIU4LZZMKBHY5MG7SBBBTMA3XM"
        target="_blank"
        rel="noopener noreferrer"
        >
        dowload viewing activity here
      </a>
      <h1></h1>
      <form>
        <input
          type={"file"}
          id={"csvFileInput"}
          accept={".csv"}
          onChange={handleOnChange}
        />

        <button
          onClick={(e) => {
            handleOnSubmit(e);
          }}
        >
          Import CSV
        </button>
      </form>

      <br />

      <table>
        <thead>
          <tr key={"header"}>
            {headerKeys.map((key) => (
              <th>{key}</th>
            ))}
          </tr>
        </thead>

        <tbody>
          {array.map((item) => (
            <tr key={item.id}>
              {Object.values(item).map((val) => (
                <td>{val}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <Analysis array={array}></Analysis>
    </div>
  );
}

export default App;
