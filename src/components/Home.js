import React from 'react';
import ShowVideos from './ShowVideos';
import ShowGifs from './ShowGifs';
import CheckLogin from '../commonMethod/CheckLogin';
import Footer from './Footer';
// import { useState, useEffect } from 'react';


export default function Home() {

  
  return (
    <div class="home-page">
      <main>
        <h2 className="home-head2">Join us to make your own exercise plan</h2> 
      </main>
      < ShowGifs />
      {/* < ShowVideos /> */}
      < Footer />
      < CheckLogin />
    </div>
  )
}
