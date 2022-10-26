import React, { useState, useEffect } from 'react'
import { CheckLogin } from '../commonMethod/CheckLogin'




function ShowGifs () {
  const [gifs, setGifs] = useState([])
  // get data via API

  // const exerciseDBOptions = {
  //   method: 'GET',
  //   headers: {
  //     'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
  //     'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  //   }
  // };
  

  // get data via API

  // let randomNum = Math.floor(Math.random() * 1324)
  // const getExerciseData = async () => {
  //   const gifsData = fetch('https://exercisedb.p.rapidapi.com/exercises', exerciseDBOptions)
  //     .then(response => response.json())
  //     .then(response => response.slice(randomNum, randomNum + 3))
  //   setGifs(gifsData.map(item => item.gifUrl))
  // } 

  
  const getExerciseData = () => {
    let randomNum = Math.floor(Math.random() * 1324)
    fetch('api/exerciseGifData')
      .then(res => res.json())
      .then(res => res.exerciseGifData.slice(randomNum, randomNum + 3))
      .then(res => setGifs(res.map(item => item.gifUrl)))
  } 
  useEffect (() => {
    getExerciseData()
    
  }, [])
 


  return (
    <div>
      <h2>Exercise At Home</h2>
      
      <section className="show-gifs">
        {gifs.map((item, index) => 
          <img key={index} src={item} alt="" />
        )}
      </section>
    </div>
   )
}

export default ShowGifs

