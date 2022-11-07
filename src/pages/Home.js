import React from 'react';
import ShowVideos from '../components/ShowVideos';
import ShowGifs from '../components/ShowGifs';
import Footer from '../components/Footer';
import HeaderNav from '../components/HeaderNav';
import ShowMap from '../components/ShowMap';
import Timer from '../components/Timer';


export default function Home() {
  return (
    <div className="home-page">
      < HeaderNav />
      <main>
        <h2 className="home-head2">Make your own exercise plan</h2> 
      </main>
      < ShowGifs />
      < ShowMap />
      < ShowVideos />
      < Footer />
      < Timer />
    </div>
  )
}
