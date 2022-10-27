import { Link } from 'react-router-dom'
import { GoogleMap, Marker, LoadScript } from '@react-google-maps/api';
import HeaderNav from './HeaderNav';

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
    <div>
      < HeaderNav />
      <div className="map-page">
      
      <h2 style={{margin:'40px'}}><Link to='/gym'>Go To A GYM</Link></h2>
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
    </div>
    
    
  )
}