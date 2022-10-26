import React, { useState, useEffect }  from 'react'


export default function Timer(mins) {
  const [hours, setHours] = useState('');
  const [minutes, setMinutes] = useState('');
  const [seconds, setSeconds] = useState('');

  setHours(Math.floor(mins / 60));
  setMinutes(Math.floor(mins - 60 * hours)) 
  setSeconds(0)

  const timer = () => {
    let timeChange = setInterval(() => setTimeout(t => t -1), 1000)
  }
  
  return (
    <div>Timer
      <section>
        {hours}:{minutes}:{seconds}
      </section>
    </div>
  )
}
