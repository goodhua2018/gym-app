import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import ExerciseCard from './ExerciseCard';




const SearchGifs = () => {
  const [search, setSearch] = useState('')
  const [gifs, setGifs] = useState([])
  const handleSearch =  () => {
    fetch(`api/exerciseGifData/${search}`)
      .then(res => res.json())
      .then(res => setGifs(res.result.slice(1, 4)))
      setSearch('')
  } 

  return (
    <div >
      <section className="search-gifs">
        <InputGroup>
        <Form.Control
          placeholder="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
        />
        <Button 
          variant="outline-secondary"
          onClick={handleSearch}
          style={{backgroundColor: 'red', color: 'white'}}
        >
          Exercises
        </Button>
        </InputGroup>
      </section>
      <section>
        < ExerciseCard exercises={gifs}/>
      </section>
    </div>
   )
}

export default SearchGifs

