import { useEffect } from 'react'
import { Button } from 'react-bootstrap'
import { bodyNames, bodyImages } from '../bodyImages'
import React, { useState } from 'react'
import { Link } from 'react-router-dom';

// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ShowPages from './ShowPages';
import ExerciseCard from './ExerciseCard';

function BodyParts () {
  console.log(bodyImages)
  console.log(bodyNames)
  const [bodyPart, setBodyPart] = useState('')
  const [gifs, setGifs] = useState([])
  const [thisExercise, setThisExercise] = useState({})

  const showGifsByBodyPart = () => {
    fetch(`api/exerciseGifData/${bodyPart}/bodyPart`)
      .then(res => res.json())
      .then(res => setGifs(res.result.slice(5, 15)))
    } 
    console.log(gifs)
  
  useEffect(() => {
    console.log(bodyPart)
    showGifsByBodyPart()
  }, [bodyPart])

  // const exerciseDetail = (e) => {
  //   console.log(e.target.value)
    
  // }

  useEffect(() => {
    console.log(thisExercise)
  }, [thisExercise])

  const addToMyPlan = () => {
    console.log('add')
  }

  return (
    <div>
      <h3>Choose Which part you would like to strengh</h3>
      {bodyNames.map((bodyPart, index) => 
        <button
          key={index}
          // value={bodyPart}
          onClick={() => setBodyPart(bodyPart)}
        >
          <img src={bodyImages[bodyPart]} alt={bodyPart} width={'80px'} style={{margin: '10px'}}/>
        </button>
      )}
      < ExerciseCard exercises={gifs}/>

      < ShowPages />
    </div>
  )
}


export default BodyParts




