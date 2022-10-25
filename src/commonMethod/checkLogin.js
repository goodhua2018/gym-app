import { useState } from 'react'

export const checkLogin = () => {
  const [loggedInName, setLoggedInName] = useState('')
  const [loggedInEmail, setLoggedInEmail] = useState('')

  fetch('/api/sessions')
    .then(res => res.json())
    .then(user => {
      if (typeof user.email === 'string') {
        console.log(user)
        setLoggedInName(user.email) 
        setLoggedInEmail(user.name) 
        
      }
    })
}