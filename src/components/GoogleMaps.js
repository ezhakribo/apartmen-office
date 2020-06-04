import React from 'react';
import {
    GoogleMap,
    useLoadScript,
    Marker,
    InfoWindow,
  } from "@react-google-maps/api";
import mapStyles from "./mapStyles";

const libraries = ["places"];
const mapContainerStyle = {
    width: "30rem",
    height: "30rem",
};
const center = {
    lat: -6.261493,
    lng: 106.810600
}
const options = {
    styles: mapStyles,
    disableDefaultUI: true,
}

export default function Map() {
    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
        libraries
    });
      
    const [markers, setMarkers] = React.useState([]);
    const [selected, setSelected] = React.useState(null);
    
    const onMapClick = React.useCallback((event) => {
    setMarkers(current => [...current, {
        lat: event.latLng.lat(),
        lng: event.latLng.lng(),
        time: new Date(),
    }])
    }, [])
    
    const mapRef = React.useRef();
    const onMapLoad = React.useCallback((map) => {
        mapRef.current = map;
    }, []);

    if (loadError) return "Error Loading Maps";
    if (!isLoaded) return "Loading Maps";

    return <div className="data-map">
        <GoogleMap 
            mapContainerStyle={mapContainerStyle}
            zoom={15}
            center={center}
            options={options}
            onClick={onMapClick}
            onLoad={onMapLoad}
        >
        {markers.map((marker) => (
            <Marker
            key={marker.time.toISOString()}
            position={{ lat: marker.lat, lng: marker.lng }}
            // icon={{
            //   url: "/pin.svg",
            //   scaledSize: new window.google.maps.Size(30,30),
            // }}
            onClick={() => {
                setSelected(marker);
            }}
            />
        ))}

        {selected ? (
            <InfoWindow
                position={{ lat: selected.lat, lng: selected.lng }}
                onCloseClick={() => {
                    setSelected(null);
                }}
                >
                <div>
                    <h2>You Selected This Location!</h2>
                </div>
            </InfoWindow>) : null}
        </GoogleMap>
      </div>
}