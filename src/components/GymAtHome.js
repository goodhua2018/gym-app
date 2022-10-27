import React from 'react';
import SearchVideos from './SearchVideos';
import SearchGifs from './SearchGifs';
import BodyParts from './BodyParts';
import Footer from './Footer';
import HeaderNav from './HeaderNav';

export default function GymAtHome() {
  return (
    <div className="exercise-page">
      < HeaderNav />
      <h1>This is the way you Exercise At Home</h1>
      
      
      < SearchGifs />
      
      < BodyParts />
      {/* < CheckLogin /> */}
      {/* < SearchVideos /> */}
      < Footer />

    </div>
  )
}
