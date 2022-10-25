import React from 'react';
import ShowVideos from './ShowVideos';
import ShowGifs from './ShowGifs';
import CheckLogin from '../commonMethod/CheckLogin';
// import { useState, useEffect } from 'react';


export default function Home() {

  
  return (
    <div>
      Home, Join us to make your own exercise plan
      < ShowGifs />
      < ShowVideos />
      < CheckLogin />
    </div>
  )
}
