import React from 'react';
import SearchVideos from './SearchVideos';
import SearchGifs from './SearchGifs';
import BodyParts from './BodyParts';
import CheckLogin from '../commonMethod/CheckLogin';

export default function GymAtHome() {
  return (
    <div className="exercise-page">
      <h1>This is the way you Exercise At Home</h1>
      < BodyParts />
      
      < SearchGifs />
      < SearchVideos />
      < CheckLogin />
    </div>
  )
}
