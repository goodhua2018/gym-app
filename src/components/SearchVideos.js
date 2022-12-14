import React, { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { AiFillYoutube } from 'react-icons/ai'


const SearchVideos = () => {
  const [search, setSearch] = useState('')
  const [videoIds, setVideoIds] = useState([])
  const [videoItems, setVideoItems] = useState([])

  const handleSearch = async () => {
    const videosData = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=3&q=${search}&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`)
      .then(response => response.json())
     
    setVideoIds(videosData.items.map(item => `https://www.youtube.com/embed/${item.id.videoId} `))

    setVideoItems(videosData.items)  
  } 
  
  useEffect(() => {
    console.log(videoIds)
  }, [videoIds])

  return (
    <div>
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
            Youtube
            < AiFillYoutube size={30}/>
          </Button>
        </InputGroup>
      </section>
     
      <section className="show-videos" >
        {videoIds.map((item, index) => 
          <iframe   
            width="300" height="200" 
            frameBorder="0" 
            key={index} 
            src={item} 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
          >
          </iframe>
        )}
      </section>
    </div>
  )
}

export default SearchVideos

