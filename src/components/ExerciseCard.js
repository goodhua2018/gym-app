import React from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ShowPages from './Pagination';
import {useState, useEffect} from 'react'
import PaginatedItems from './Pagination';


function ExerciseCard( props ) {
  const [loggedInEmail, setLoggedInEmail] = useState('')

  useEffect(() => {
    fetch('/api/sessions')
    .then(res => res.json())
    .then(user => {
      if (typeof user.email === 'string') {
        console.log(user)
        setLoggedInEmail(user.email) 
        console.log(loggedInEmail)
      } else {
        console.log('no one log in')
      }
    })
  }, [loggedInEmail])

  const addToMyPlan = (exerciseId) => {
    console.log('add')
    const data = {user_email: loggedInEmail, exercise_id: exerciseId}
    console.log(data)
    
    fetch('/api/exerciseGifData', {
      method: 'POST', 
      headers: {'Content-Type': 'application/json'},
      body:JSON.stringify(data)
    })
      .then(res => res.json())
      .then(res => {
          if (res.error) {
              console.log(res.error)
             
          } else {
            // back to the main page 
              console.log(res)
             
          }     
      })
  }
  const [gifs, setGifs] = useState([])
  useEffect(() => {
    setGifs(props.exercises)
  })
  return (
    <div>

      <section className="show-gifs" >
    {gifs.map((item, index) => 
      <div className="exercise-card" key={index}>
   
      <Card >
        <Card.Img variant="top"  src={item.gifUrl} alt={item.name} />
        <Card.Body>
        <Link to={`gymathome/${item.id}`}><Button 
            variant="primary" 
            value={item}
          >
            Details
          </Button></Link>

          <Button 
            variant="primary" 
            style={{marginLeft: '10px'}}
            onClick={() => addToMyPlan(item.id)}
          >
            Add to My Plan
          </Button>
        </Card.Body>
      </Card>
    
    
      
      </div>
        )}
    </section>
    </div>
    
  )
}
export default ExerciseCard;
