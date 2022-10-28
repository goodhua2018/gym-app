import React, { useState, useEffect }  from 'react'
import { CgSandClock } from 'react-icons/cg';
import Button from 'react-bootstrap/Button';


const Timer = (props) => {
  const [time, setTime] = useState(Number(props.sec))
  const [running, setRunning] = useState(false)
  const [btnText, setBtnText] = useState('Start')


  useEffect(() => {
    let tempTimer;
    if (running && time > 0) {
      tempTimer = setTimeout(() => {
        setTime(time => time -1)
      }, 1000)
      setBtnText('Stop')
      
    } else {
      clearTimeout(tempTimer)
      setBtnText('Start')
      setRunning(false)
    }
    return () => clearTimeout(tempTimer)
  })

  function toggle () {
    if (running) { 
      return false
    } else {
      if (time == '') {
        setTime(Number(props.sec))
      } 
      return true
    }
  }

  return (
    <span>
      <Button       
        size="sm"
        style={{marginLeft:'2px', backgroundColor:'#E67C79'}}
        onClick={() => setRunning(toggle)}
      >
        {btnText}
      </Button>
      <span > < CgSandClock /></span>
      <p style={{height: '30px', fontSize: '20px', paddingTop: '5px'}}> {time}</p>
    </span>
  )
}
export default Timer;
