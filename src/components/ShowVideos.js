import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const ShowVideos = () => {
  const [videoIds, setVideoIds] = useState(['https://www.youtube.com/embed/bIthHcAxehg ', 'https://www.youtube.com/embed/CIxNJbit9BA ', 'https://www.youtube.com/embed/yL_dE81O_mw ', 'https://www.youtube.com/embed/8BcPHWGQO44 ', 'https://www.youtube.com/embed/R6Nr-VaFcqM ', 'https://www.youtube.com/embed/ejABmniX1bM '])

  const [videoItems, setVideoItems] = useState([])


  // get videos from Youtube API

  // const getExerciseVideos = async () => {
  //   let randomNum = Math.floor(Math.random() * 7)
  //     const videosData = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=exercise&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`)
  //     .then(response => response.json())

  //     console.log(videosData.items)
  //     setVideoIds(videosData.items.slice(randomNum, randomNum + 4).map(item => `https://www.youtube.com/embed/${item.id.videoId} `))

  //     setVideoItems(videosData.items)  
  //   } 
  
  // useEffect(() => {
  //   console.log(videoIds)
  //   getExerciseVideos()
    
  // }, [])

  return (
    <div className="video-page">
      <h2><Link to='/video'>Watch Videos To Learn</Link></h2>
      <section className="show-videos" >
        {videoIds.map((item, index) => 
          <iframe 
            width="300" height="200" 
            src={item} 
            frameBorder="0" 
            key={index} 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
          >
          </iframe>
        )}
      </section>
    </div>
   )
}

export default ShowVideos

