import React from 'react'
import ShowVideos from './ShowVideos'
import SearchVideos from './SearchVideos'
import HeaderNav from './HeaderNav'

export default function Videos() {
  return (
    <div>
      < HeaderNav />
      < SearchVideos />
      < ShowVideos />
    </div>
  )
}
