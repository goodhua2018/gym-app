import React from 'react'
import { useState, useEffect, useRef } from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import {RiDeleteBin5Line} from 'react-icons/ri';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { CgSandClock } from 'react-icons/cg';


export default function MyPlan() {
  const [loggedInEmail, setLoggedInEmail] = useState('')
  const [userGifs, setUserGifs] = useState([])
  const [mins, setMins] = useState('')
  const timeRef = useRef()

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
  const deleteUserExercise = (itemId) => {
    fetch(`/api/exerciseGifData/${itemId}`, {
      method: 'DELETE'
    })
      .then(() => {
        setUserGifs(userGifs.filter(t => t.id != itemId))
    }) 
  }
  
  // useEffect(() => {
  //   if (mins > 0 ) {
  //     timeRef.current = setTimeout(() => {
  //     setMins( mins => mins - 1)
  //   }, 1000)
  //   }
  //   return () => clearTimeout(timeRef.current)
  // }, [mins])

  const timer = () => {
   
      let tempTimer = setInterval(() => {
        if (mins > 0 ) {
          setMins(mins => mins - 1)
        } else {
          clearInterval(tempTimer)
        } 
    }, 1000)
    
       
     
  }

  return (
    <div className="my-plan">
      <h1>My Exercise Plan</h1>
      <section>
        <button onClick={() => getPlan()}>click</button>
      </section>
      <section style={{marginTop: '20px'}}>
        < CgSandClock />
        <h2>{mins}</h2>
      </section>
      <section className="plan-list">
        {userGifs.map((item, index) => 
          <div className="exercise-card" key={index}>
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={item.gifUrl} alt={item.name} width={'200px'} />
            <Card.Body>
              <input 
                type="text" 
                className="plan-input"
                placeholder="sec"
                // value={mins}
                onChange={(e) => setMins(e.target.value)}
              />
              <Button 
                variant="success"
                size="sm"
                style={{marginLeft:'2px'}}
                onClick={() => timer()}
              >
                Start
              </Button>
              <span className={item.id} onClick={() => deleteUserExercise(item.id)}> <RiDeleteBin5Line size={'30'}/></span>
            </Card.Body>
          
          </Card>
  
        </div>
        )}
      </section>
    
    </div>
  )
}
