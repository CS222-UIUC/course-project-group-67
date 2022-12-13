import logo from './logo.svg';
import wrapped_logo from './wrapped-logo.svg';
import netflix_logo from './netflix-logo.svg';
import './App.css';
import React, { useEffect, useState } from "react";
import { PieChart, Pie, Legend, Tooltip, ResponsiveContainer } from 'recharts';
import Analysis from './Analysis';
import Table from './Table';

function App() {
  const [file, setFile] = useState();
  const [array, setArray] = useState([]);

  const [name, setName] = useState("");
  const [totalMins, setTotalMins] = useState(0);
  const [numMovies, setNumMovies] = useState(0);
  const [numShows, setNumShows] = useState(0);
  const [topShow, setTopShow] = useState("");
  const [favGenre, setFavGenre] = useState("");
  const [mostDOW, setDOW] = useState("");
  const [mostDay, setDate] = useState("");
  const [recommendation, setRecommendation] = useState("");

  const [genreChart, setGenreChart] = useState([]);

  const fileReader = new FileReader();

  const [tableShown, setTableShown] = useState(false);
  const [analysisShown, setAnalysisShown] = useState(false);
  const [buttonShown, setButtonShown] = useState(false);

  const handleClick = event => {
    setTableShown(current => !current);
  };

  const handleOnChange = (e) => {
    setFile(e.target.files[0]);
    console.log("hi");
    // JSON.stringify(array);
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
    //assignVariables(array);
    //console.log(array[10].Genre);
    //console.log(array.length);
  };

  useEffect(() => {
      const genre_to_mins = new Map();
      const dow_to_mins = new Map();
      const date_to_mins = new Map();
      const month_to_mins = new Map();
      const genre_to_recs = new Map([
        ["Rom-Com", "Crazy Rich Asians"],["Teen", "Lemonade Mouth"],["Sci-Fi", "Interstellar"],["Musical", "The Greatest Showman"]
        ,["Thriller", "The Conjuring"],["Mystery", "National Treasure"],["Drama", "The Perks of Being a Wallflower"]
        ,["Foreign", "Parasite"],["Sitcom", "How I Met Your Mother"],["Documentary", "Blackfish"]]);
      const show_to_mins = new Map();
      const movie_to_mins = new Map();
  
      //console.log(genre_to_recs);
      //console.log(arr[0]);

      let tempTotalMins = 0;

      for (let i = 0; i < array.length; i++) {
        let entry = array[i];
        tempTotalMins += parseInt(entry.Minutes);
        //checks if movie or show and changes count
        if (entry.Classification === "Movie") {
          movie_to_mins.set(entry.Title, movie_to_mins.get(entry.Title) + parseInt(entry.Minutes) || parseInt(entry.Minutes));
        } else { //show to mins
            if (show_to_mins.has(entry.Title)) {
              show_to_mins.set(entry.Title, parseInt(show_to_mins.get(entry.Title)) + parseInt(entry.Minutes));
            } else {
              show_to_mins.set(entry.Title, parseInt(entry.Minutes));
            }
        }
        //genre to mins
        genre_to_mins.set(entry.Genre, genre_to_mins.get(entry.Genre) + parseInt(entry.Minutes) || parseInt(entry.Minutes));
        //console.log(i);
        //console.log(entry.Genre);
        //console.log( genre_to_mins.get(entry.Genre))
        //date to mins
        if (date_to_mins.has(entry.Date)) {
          date_to_mins.set(entry.Date, parseInt(date_to_mins.get(entry.Date)) + parseInt(entry.Minutes));
        } else {
          date_to_mins.set(entry.Date, parseInt(entry.Minutes));
        }
        //day of week to mins
        const d = new Date(entry.Date); //make date object
        //console.log("Date" + d);
        const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
        let dow = weekday[d.getDay()];
        if (dow_to_mins.has(dow)) {
          dow_to_mins.set(dow, parseInt(dow_to_mins.get(dow)) + parseInt(entry.Minutes));
        } else {
          dow_to_mins.set(dow, parseInt(entry.Minutes));
        }
        //console.log("DOW: " + dow);
        //console.log("DOW: " + dow_to_mins.get(dow));
        //month to mins
        const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
        let month = months[d.getMonth()];
        if (month_to_mins.has(month)) {
          month_to_mins.set(month, parseInt(month_to_mins.get(month)) + parseInt(entry.Minutes));
        } else {
          month_to_mins.set(month, parseInt(entry.Minutes));
        }
      }
  
      //console.log("done parsing");
      //console.log(genre_to_mins);
      
      //set values
      //console.log(show_to_mins);
      //console.log(show_to_mins.size);
      setNumShows(show_to_mins.size);
      setNumMovies(movie_to_mins.size);
      //console.log(numShows);
  
      //console.log(genre_to_mins);
      //console.log(genre_to_mins.keys())
      const [firstGenre] = genre_to_mins.keys();
      let top_genre = firstGenre;
      //console.log(top_genre);
      for (const [key, value] of genre_to_mins) {
        //console.log("key" + key);
        //console.log("val" + value);
        if (parseInt(value) > parseInt(genre_to_mins.get(top_genre))) {
          top_genre = key;
        }
      }
      setFavGenre(top_genre);
      //console.log(top_genre);

      //console.log(show_to_mins);
      const [firstShow] = show_to_mins.keys();
      let top_show = firstShow;
      for (const [key, value] of show_to_mins) {
        if (parseInt(value) > parseInt(show_to_mins.get(top_show))) {
          top_show = key;
        }
      }
      setTopShow(top_show);
  
      const [firstDOW] = dow_to_mins.keys();
      let top_dow = firstDOW;
      for (const [key, value] of dow_to_mins) {
        if (parseInt(value) > parseInt(dow_to_mins.get(top_dow))) {
          top_dow = key;
        }
      }
      setDOW(top_dow);

      const [firstDate] = date_to_mins.keys();
      let top_date = firstDate;
      for (const [key, value] of date_to_mins) {
        if (parseInt(value) > parseInt(date_to_mins.get(top_date))) {
          top_date = key;
        }
      }
      setDate(top_date);
      setRecommendation(genre_to_recs.get(top_genre));
      setTotalMins(tempTotalMins);

      //CHARTS
      //genre_chart.push({name:[...genre_to_mins.keys()], value:[...genre_to_mins.values()]});
    
      let genre_chart = [];
      for (const [key, val] of genre_to_mins) {
        let item = { name: key, value: val };
        genre_chart.push(item);
      }
      console.log(genre_chart);
      setGenreChart(genre_chart);
      console.log(genreChart);

      setName("sneha mohan");

      setAnalysisShown(current => !current);
      setButtonShown(current => !current);

  }, [array]);

  const handleOnSubmit = (e) => {
    e.preventDefault();

    if (file) {
      fileReader.onload = function (event) {
        const text = event.target.result;
        csvFileToArray(text);
      };

      fileReader.readAsText(file);
    }

    console.log("hi2");
    //assignVariables(array);

    /*window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });*/

    //var element = document.getElementById("analysis");
    //element.scrollIntoView({behavior: "smooth"});

  };

  const headerKeys = Object.keys(Object.assign({}, ...array));

  return (
    <div className='App'>
      <header className="App-header">
        <div className='title-box'>
          <img src={netflix_logo} className="App-logo" alt="netflix_logo" />
          <img src={wrapped_logo} className="wrapped-logo" alt="wrapped_logo" />
        </div>
        <h1 className='title'>welcome to netflix wrapped</h1>
        <h2>
          a little bit about how this works:
        </h2>
        <p className='top'>
          our site takes your netflix watch history and compiles different statistics to help you understand and visualize your watching habits—it even recommends new ideas for your watch list. 
        </p>
        <p className='top'>
          to get started, visit the following link, login to your netflix account, scroll to the bottom and click "download all", then upload your file below. happy streaming!
        </p>
        <a
          className="App-link"
          href="https://www.netflix.com/viewingactivity"
          target="_blank"
          rel="noopener noreferrer"
          >
          dowload your viewing activity here
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
      </header>

      <br/>
      <div className='analysis-box'>
      {analysisShown && <div id="analysis"><Analysis name={name} totalMins={totalMins} numMovies={numMovies} numShows={numShows} topShow={topShow} favGenre={favGenre} mostDOW={mostDOW} mostDay={mostDay} recommendation={recommendation}/></div>}
      </div>
      <br/>

      {/*<ResponsiveContainer width="100%" height="100%">
        <PieChart width={400} height={400}>
          <Pie dataKey="value" isAnimationActive={false} data={genreChart} cx="50%" cy="50%" outerRadius={80} fill="#8884d8" label/>
          <Tooltip/>
        </PieChart>
        </ResponsiveContainer>*/}
      <div className='data-box'>
      {buttonShown && <button className='data-button' onClick={handleClick}>see your raw data</button>}
      </div>

      <h1></h1>
      <h1></h1>

      <div className='table-box'>
      {tableShown && <Table array={array} headerKeys={headerKeys}/>}
      </div>

    </div>
  );
}

export default App;
