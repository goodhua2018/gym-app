import React from 'react';
import ShowVideos from './ShowVideos';
import ShowGifs from './ShowGifs';

export default function Home() {
  return (
    <div>
      Home
      < ShowGifs />
      < ShowVideos />
    </div>
  )
}
