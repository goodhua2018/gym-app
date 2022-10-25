import { useEffect } from 'react'
import { Button } from 'react-bootstrap'
import { bodyNames, bodyImages } from '../bodyImages'
import React, { useState } from 'react'

function BodyParts () {
  console.log(bodyImages)
  console.log(bodyNames)
  const [bodyPart, setBodyPart] = useState('')
  const [gifs, setGifs] = useState([])

  const showGifsByBodyPart = () => {
    fetch(`/exerciseGifData/${bodyPart}/bodyPart`)
      .then(res => res.json())
      .then(res => setGifs(res.result.slice(0, 2).map(item => item.gifUrl)))
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
          <img key={index} src={item} alt="" width="300" />
        )}
      </section>



    </div>
  )
}


export default BodyParts