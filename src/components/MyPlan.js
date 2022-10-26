import React from 'react'
import { useState, useEffect } from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export default function MyPlan() {
  const [loggedInEmail, setLoggedInEmail] = useState('')

  const [userGifs, setUserGifs] = useState([])

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

  const getPlan = () => {
    fetch(`/api/exerciseGifData/plans/${loggedInEmail}`)
    .then(res => res.json())
    .then(res => {
      console.log(res.result)
      setUserGifs(res.result)
    })
  
  }
  

  return (
    <div className="my-plan">
      <h1>MyPlan</h1>
      <section>
        <button onClick={() => getPlan()}>click</button>
      </section>
      <section>
      {userGifs.map((item, index) => 
      <div className="exercise-card" key={index}>
   
      <Card >
        <Card.Img variant="top"  src={item.gifUrl} alt={item.name} />
        <Card.Body>
          <Button 
            variant="primary" 
            style={{marginLeft: '10px'}}
          >
            30 min
          </Button>
        </Card.Body>
      </Card>
    
    
      
      </div>
        )}

      </section>

    </div>
  )
}
