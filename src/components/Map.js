import { useMemo } from 'react';
import { GoogleMap, Marker, LoadScript } from '@react-google-maps/api';

export default function Map() {

  return (
    <ShowMap />
  )

}
const containerStyle = {
  width: '500px',
  height: '400px'
}
function ShowMap () {

  const center = {lat: -34, lng: 138}
  return (
    <div className="map-page">
      <h1>Go To A GYM</h1>
      <LoadScript googleMapsApiKey='AIzaSyAxqr6ydoVRiSFg-7-TdT1vD2IyY5ZNU48'>

        <GoogleMap 
          zoom={10} 
          center={center} 
          mapContainerStyle={containerStyle}
        >
          <Marker position={center} />
        </GoogleMap>
      </LoadScript>
      
    </div>
    
  )
}