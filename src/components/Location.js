

import React, {useState} from 'react'

export default function Location() {

  const [lat, setLat] = useState('')
  const [lon, setLon] = useState('')

  const findLocation = () => {
    const success = position => {
      console.log(position.coords)
      setLat(position.coords.latitude)
      setLon(position.coords.longitude)
      fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lon}&localityLanguage=en`)
        .then(res => res.json())
        .then(info => {
          console.log(info.city)
          console.log(info.countryName)
        })
    }
    const error = () => {
      console.log('unable to get location')
    }

    navigator.geolocation.getCurrentPosition(success, error)
  }

  return (
    <div>
      Location
      <button onClick={findLocation}>click</button>
      <p>{lat}</p>
      <p>{lon}</p>
      
      
    </div>
    
  )
}
