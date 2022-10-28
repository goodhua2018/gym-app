import React from 'react';
import SearchVideos from '../components/SearchVideos';
import SearchGifs from '../components/SearchGifs';
import BodyParts from '../components/BodyParts';
import Footer from '../components/Footer';
import HeaderNav from '../components/HeaderNav';

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
