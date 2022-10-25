import { useEffect } from 'react'
import { Button } from 'react-bootstrap'
import { bodyNames, bodyImages } from '../bodyImages'
import React, { useState } from 'react'

// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function BodyParts () {
  console.log(bodyImages)
  console.log(bodyNames)
  const [bodyPart, setBodyPart] = useState('')
  const [gifs, setGifs] = useState([])

  const showGifsByBodyPart = () => {
    fetch(`api/exerciseGifData/${bodyPart}/bodyPart`)
      .then(res => res.json())
      .then(res => setGifs(res.result.slice(5, 9)))
    } 
    console.log(gifs)
  
  useEffect(() => {
    console.log(bodyPart)
    showGifsByBodyPart()
  }, [bodyPart])

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
      
      <section className="show-gifs" >
        {gifs.map((item, index) => 
          <div>
            <Card.Title style={{textOoverflow:'ellipsis'}}>{item.name}</Card.Title>
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" key={index} src={item.gifUrl} alt="" width="300" />
            <Card.Body>
            
          
            <Button variant="primary">Details</Button>
            <Button variant="primary" style={{marginLeft: '10px'}}>Add to My Plan</Button>
             </Card.Body>
          </Card>
          </div>
          
          
        )}
      </section>
    </div>
  )
}


export default BodyParts




