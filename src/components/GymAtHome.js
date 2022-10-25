import React from 'react';
import SearchVideos from './SearchVideos';
import SearchGifs from './SearchGifs';
import BodyParts from './BodyParts';

export default function GymAtHome() {
  return (
    <div>
      <h1>This is the way you Exercise At Home</h1>
      < BodyParts />
      < SearchGifs />
      < SearchVideos />
    </div>
  )
}
