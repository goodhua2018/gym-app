import React from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import {useState, useEffect} from 'react'



function ExerciseCard( props ) {
  const [loggedInEmail, setLoggedInEmail] = useState('')
  const [gifs, setGifs] = useState([])

  useEffect(() => {
    fetch('/api/sessions')
    .then(res => res.json())
    .then(user => {
      if (typeof user.email === 'string') {
        // console.log(user)
        // keep the user login when refresh
        setLoggedInEmail(user.email) 
      } else {
        console.log('no one log in')
      }
    })
  }, [loggedInEmail])


  const addToMyPlan = (exerciseId) => {
    const data = {user_email: loggedInEmail, exercise_id: exerciseId}
    
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

  
  useEffect(() => {
    setGifs(props.exercises)
  })

  return (
    <div>
      <section className="show-gifs" >
        {gifs.map((item, index) => 
          <div className="exercise-card" key={index}>
   
            <Card >
              <Card.Img 
                variant="top"  
                src={item.gifUrl} 
                alt={item.name} 
              />
              <Card.Body>
                <Link to={`gymathome/${item.id}`}>
                  <Button 
                    style={{backgroundColor:'#E67C79'}}
                    value={item}
                  >
                    {item.bodyPart}
                  </Button>
                </Link>

                <Button 
                  style={{marginLeft: '10px', backgroundColor:'#E67C79'}}
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
