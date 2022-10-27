

import React, {useState, useEffect} from 'react'
import { GoLocation } from 'react-icons/go'
import Nav from 'react-bootstrap/Nav';


export default function Location() {

  const [lat, setLat] = useState('')
  const [lon, setLon] = useState('')
  const [locationCity, setLocationCity] = useState('')
  const [locationCountry, setLocationCountry] = useState('')
  const [temperature, setTemperature] = useState('')
  const [weather, setWeather] = useState('')


  const findLocation = () => {
    const success = position => {
      // console.log(position.coords)
      setLat(position.coords.latitude)
      setLon(position.coords.longitude)
      fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lon}&localityLanguage=en`)
        .then(res => res.json())
        .then(info => {
          console.log(info)
          setLocationCity(info.city)
          setLocationCountry(info.countryCode)
          
        })
    }
    const error = () => {
      console.log('unable to get location')
      setLat(-33.8)
      setLon(151.2)
      setLocationCity('Sydney')
      setLocationCountry('Au')
    }

    navigator.geolocation.getCurrentPosition(success, error)
  }

  

  useEffect(() => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_OPEN_WEATHER_API_KEY}`)
    .then(res => res.json())
    .then(data => {
      console.log(data)
      setTemperature((data.main.temp - 273.15).toFixed(1) + '℃')
      setWeather(data.weather[0].main)

    })
  }, [lat])

  useEffect(() => {
    findLocation()
  }, [])
 

  return (
    <div>
      {/* <span>{temperature}  {weather}</span>
      <span>{locationCity}  {locationCountry}</span>
      <span onClick={findLocation}><GoLocation /></span> */}
      <Nav
        className="ms-auto my-2 my-lg-0"
        style={{ maxHeight: '120px' }}
        navbarScroll
        >
          <Nav.Link style={{color:'#0D6EFD'}}>{temperature}    {weather}</Nav.Link>

          <Nav.Link style={{color:'#0D6EFD'}}> {locationCity}  {locationCountry}</Nav.Link>
          <Nav.Link onClick={findLocation}><GoLocation /></Nav.Link>
      </Nav>
      
    
    </div>
    
  )
}
