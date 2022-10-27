import { useMemo } from 'react';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';

export default function Map() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACR_APP_GOOGLE_MAP_KEY
  })

  if (!isLoaded) return 

}