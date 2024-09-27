import React, { useEffect, useState } from 'react';
import Card from './Card';

const Newsapp = () => {
    const [search, setsearch] = useState("india")
    const [newsData, setNewsData] = useState(null)

    const API_KEY = "1fd2474fedd84700acb24acbfb8ddaa8";

    const getData = async() =>{
        const response = await fetch(`https://newsapi.org/v2/everything?q=${search}&apiKey=${API_KEY}`); //awite means wait when data is not get
        const jsonData = await response.json();
        console.log(jsonData.articles);
        setNewsData(jsonData.articles)
    }

    useEffect(()=>{ //run after every rander
        getData()
    },[])

    const handleInput = (e) => {
        console.log(e.target.value);
        setsearch(e.target.value)

    }

    const userInput = (event) =>{
        setsearch(event.target.value)
    }

  return (
    <div>
      <nav>
        <div>
            <h1>Trendy News</h1>
        </div>
        <ul>
            <a>All News</a>
            <a>Trending</a>
        </ul>
        <div className='searchBar'>
            <input type='text' placeholder='Search News' value={search} onChange={handleInput}></input>
            <button onClick={getData}>Search</button>
        </div>
      </nav>
      <div>
        <p className='head'>Stay Update with TrendyNews</p>
      </div>

      <div className='categoryBtn'>
        <button onClick={userInput} value="sports">Sports</button>
        <button onClick={userInput} value="ploitics">Ploitics</button>
        <button onClick={userInput} value="entertainment">Entertainment</button>
        <button onClick={userInput} value="health">Health</button>
        <button onClick={userInput} value="fitness">Fitness</button>
      </div>

      <div>
      {newsData? <Card data={newsData}/> : null}  
        
      </div>
    </div>
  );
}

export default Newsapp;
