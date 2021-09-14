import { useState, useEffect } from 'react';
import getRandomJoke from '../services/getRandomJoke';
import gifs from '../services/gifs';

import './Jokes.css';

export default function Jokes() {
    const [joke, setJoke] = useState("");
    const [gif, setGIf] = useState("");

    function setJokeAndGif () {
        getRandomJoke().then(({id,joke})=>{
            setJoke(joke);
            localStorage.setItem("joke",joke);

            const gifRandomIndex = Math.floor(Math.random()*gifs.length);
            setGIf(gifs[gifRandomIndex]);
        });
    }
    
    useEffect( ()=>{
        setJokeAndGif();
    },[]);
    

    const handleClick = (evt)=> {
        evt.preventDefault();
        setJokeAndGif();
    }

    return(
        <div className="joke-container" >
            <img className="meme-bg" src={gif} alt="" />
            <div className="joke-displayer"><div><span>{joke}</span></div></div>
            <button onClick={handleClick}  className="generator-btn">Punch Joke</button>
        </div>
    )
}