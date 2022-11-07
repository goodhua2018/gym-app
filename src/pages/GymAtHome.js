import React from 'react';
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
      < Footer />
    </div>
  )
}
