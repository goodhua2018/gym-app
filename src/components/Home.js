import React from 'react';
import ShowVideos from './ShowVideos';
import ShowGifs from './ShowGifs';
import CheckLogin from '../commonMethod/CheckLogin';
import Footer from './Footer';
// import { useState, useEffect } from 'react';
import Location from './Location';
import HeaderNav from './HeaderNav';
import ShowMap from './ShowMap';


export default function Home() {

  return (
    <div className="home-page">
      < HeaderNav />
      <main>
        <h2 className="home-head2">Make your own exercise plan</h2> 
      </main>
      < ShowGifs />
      {/* < ShowVideos /> */}
      < ShowMap />
      < ShowVideos />
      < Footer />
    </div>
  )
}
