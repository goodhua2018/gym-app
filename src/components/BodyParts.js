import { useEffect } from 'react'
import { Button } from 'react-bootstrap'
import { bodyNames, bodyImages } from '../bodyImages'
import React, { useState } from 'react'
import ExerciseCard from './ExerciseCard';

function BodyParts () {
  const [bodyPart, setBodyPart] = useState('')
  const [gifs, setGifs] = useState([])
  const [thisExercise, setThisExercise] = useState({})

  const showGifsByBodyPart = () => {
    fetch(`api/exerciseGifData/${bodyPart}/bodyPart`)
      .then(res => res.json())
      .then(res => setGifs(res.result.slice(5, 15)))
  } 
  
  useEffect(() => {
    console.log(bodyPart)
    showGifsByBodyPart()
  }, [bodyPart])


  useEffect(() => {
    console.log(thisExercise)
  }, [thisExercise])

 

  return (
    <div>
      <h3>Choose Which part you would like to strengh</h3>
      <section className="body-part-container">
        {bodyNames.map((bodyPart, index) => 
          <Button variant="light"
            key={index}
            onClick={() => setBodyPart(bodyPart)}
            className="body-part-btn"
          >
            <img 
              src={bodyImages[bodyPart]} 
              alt={bodyPart} 
              style={{margin: '10px', width: '80px'}}
            />
          </Button>
        )}
      </section>
      < ExerciseCard exercises={gifs}/>
    </div>
  )
}
export default BodyParts




