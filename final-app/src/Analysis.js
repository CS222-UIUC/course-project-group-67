import {React, useState, useEffect} from 'react'

const Analysis = (props) => {

    const [array, setArray] = useState(props.array);

    const [name, setName] = useState("");
    const [totalMins, setTotalMins] = useState(0);
    const [numMovies, setNumMovies] = useState(0);
    const [numShows, setNumShows] = useState(0);
    const [top3Shows, setTop3Shows] = useState([]);
    const [favGenre, setFavGenre] = useState("");
    const [mostDay, setMostDay] = useState("");
    const [recommendation, setRecommendation] = useState("");

	return (
        <div>
            <div style={{ textAlign: "center" }}>
                <h1>Hello, {name}</h1>
                <p>
                    In your life, you have watched a total of {totalMins} of Netflix.
                </p>
                <p>
                    For more perspective, that's {totalMins / 60} hours.
                </p>
                <p>
                    Within that time, you watch {numMovies} and {numShows} different TV Shows. Wow! That's a lot!
                </p>
                <p>
                    You spent the most time watching these 3 shows: {top3Shows}.
                </p>
                <p>
                    For some reason, you watched the most Netflix on {mostDay}s. {mostDay} got you in your feels?
                </p>
                <p>
                    Overall, your most commonly watched genre is {favGenre}. Because of this, we recommend {recommendation} for you to watch next. You'll definitely enjoy!
                </p>
            </div>
        </div>
	)
}

export default Analysis;