import { useEffect, useState } from 'react'

const CheckLogin = ({checkEmail}) => {

  const [loggedInEmail, setLoggedInEmail] = useState('')


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

 
  
  return (
    <div onChange={() => checkEmail()}></div>
  )
}

export default CheckLogin;