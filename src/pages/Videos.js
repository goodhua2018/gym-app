import React from 'react'
import ShowVideos from '../components/ShowVideos'
import SearchVideos from '../components/SearchVideos'
import HeaderNav from '../components/HeaderNav'

export default function Videos() {
  return (
    <div>
      < HeaderNav />
      < SearchVideos />
      < ShowVideos />
    </div>
  )
}
