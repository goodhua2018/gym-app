

import React from 'react'

export default function Location() {
  const findLocation = () => {


    const success = position => console.log(position)
    navigator.geolocation.getCurrentPosition(success, error)
  }




  return (
    <div>
      Location
      <button onCl></button>
      
    </div>
    
  )
}
