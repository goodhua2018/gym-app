import { Link } from 'react-router-dom'
import { GoogleMap, Marker, LoadScript } from '@react-google-maps/api';


const ShowMap = () => {

  const center = {lat: -34.921230, lng: 138.599503}
  const containerStyle = {
    width: '500px',
    height: '400px'
  }
  
  return (
    <div>
     
      <div className="map-page">
      
      <h2 style={{margin:'40px'}}><Link to='/gym'>Go To A GYM</Link></h2>
      <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAP_KEY}>

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

export default ShowMap