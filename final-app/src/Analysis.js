import {React, useState, useEffect} from 'react'
import './App.css';

const Analysis = (props) => {

    console.log(props);

	return (
        <div>
            <div style={{ textAlign: "center" }}>
                <h1>hello, {props.name}</h1>
                <p className='ana'>
                    in 2022, you've watched a total of <b>{props.totalMins}</b> minutes of netflix.
                </p>
                <p className='ana'>
                    for perspective, that's <b>{(props.totalMins/60).toFixed(1)}</b> hours.
                </p>
                <p className='ana'>
                    within that time, you saw <b>{props.numMovies}</b> movies and <b>{props.numShows}</b> different tv shows. wow! that's a lot!
                </p>
                <p className='ana'>
                    you spent the most time watching this show: <b>{props.topShow}</b>.
                </p>
                <p className='ana'>
                    for some reason, you perused netflix the most on <b>{props.mostDOW}s</b> each week. <b>{props.mostDOW}</b> got you in your feels?
                </p>
                <p className='ana'>
                    you watched the most TV this year on <b>{props.mostDay}</b>. what happened that day???
                </p>
                <p className='ana'>
                    overall, your most frequent genre is <b>{props.favGenre}</b>. because of this, we recommend <b>{props.recommendation}</b> for you to watch next. you'll definitely enjoy!
                </p>
            </div>
        </div>
	)
}

export default Analysis;