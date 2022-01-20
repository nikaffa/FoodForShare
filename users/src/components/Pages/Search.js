//run npm i react-router-dom
//run npm install @react-google-maps/api
//run npm install use-places-autocomplete
//run npm install @reach/combobox

//npm run start every time you modify the .env file so the variables get updated

import React, { useState, useCallback, useRef } from 'react';
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";
import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
} from "@reach/combobox";
import "@reach/combobox/styles.css";

const places = {
  "places": [
    {
      "properties": {
        "ID": 960,
        "NAME": "Restaurant",
        "ADDRESS": "8720 Russell Road",
        "LEFTOVER": "5"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [-75.3372987731628, 45.383321536272049]
      }
    },
    {
      "properties": {
        "ID": 9600,
        "NAME": "Food bank",
        "ADDRESS": "1490 Youville Drive",
        "LEFTOVER": "2"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [-75.546518086577947, 45.467134581917357]
      }
    }, 
  ]
}

//google maps library
const libraries = ["places"];

//map container style
const mapContainerStyle = {
  height: "70vh",
  width: "100vw",
};
const center = {
  lat: 45.4211,
  lng: -75.6903
};
const options = {
  disableDefaultUI: true,
  zoomControl: true,
};
 
//Map script
const Search = () => {
  //hook to run google script
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_API_KEY,
    libraries: libraries,
  });

  // const [markers, setMarkers] = useState([]);
  const [selected, setSelected] = useState(null);

  //retains state without rerenders
  const mapRef = useRef();
  //returns a map instance, prevents rerenders
  const onMapLoad = useCallback((map) => {
    mapRef.current = map;
  }, []);

  //
  const panTo = useCallback(({ lat, lng }) => {
    mapRef.current.panTo({ lat, lng });
    mapRef.current.setZoom(14);
  }, []);

  if (loadError) return "Error";
  if (!isLoaded) return "Loading...";

  return (
    <>
      <div>
        <Locate panTo={panTo} /> 
        <SearchMe panTo={panTo} />

        <GoogleMap
          id="map"
          mapContainerStyle={mapContainerStyle}
          zoom={8}
          center={center}
          options={options}
          onLoad={onMapLoad}
        >
          {places.places.map((place) => (
            <Marker 
            key={place.properties.ID}
            position={{
              lat: place.geometry.coordinates[1],
              lng: place.geometry.coordinates[0]
            }}
            onClick={() => {
              setSelected(place);
            }} />
          ))}
          
          {selected && (
            <InfoWindow
              position={{ lat: selected.geometry.coordinates[1], lng: selected.geometry.coordinates[0] }}
              onCloseClick={() => {
                setSelected(null);
              }}
            >
            <div>
              <h2>{selected.properties.NAME}</h2>
              <p><strong>{selected.properties.LEFTOVER}</strong> portions left</p>
            </div>
          </InfoWindow>
        )}
        </GoogleMap>
      </div>  
      <div><h1>food is shown here</h1></div>
    </> 
  )
}
//Geolocating user
const Locate = ({ panTo }) => {
  return (
    <button
      className="locate"
      onClick={() => {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            panTo({
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            });
          },
          () => null
        );
      }}
    >
      <img src="/compass.svg" alt="compass" />
    </button>
  );
}

//Search bar
const SearchMe = ({ panTo }) => {
  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
    clearSuggestions,
  } = usePlacesAutocomplete({
    requestOptions: {
      location: { lat: () => 43.6532, lng: () => -79.3832 },
      radius: 50 * 1000,
    },
  });

  const handleSelect = async (address) => {
    setValue(address, false);
    clearSuggestions();

    try {
      const results = await getGeocode({ address });
      const { lat, lng } = await getLatLng(results[0]);
      panTo({ lat, lng });
    } catch (error) {
      console.log("😱 Error: ", error);
    }
  };

  const handleInput = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className="search">
      <Combobox onSelect={handleSelect}>
        <ComboboxInput
          value={value}
          onChange={handleInput}
          disabled={!ready}
          placeholder="Search location"
        />
        <ComboboxPopover>
          <ComboboxList>
            {status === "OK" &&
              data.map(({ id, description }) => (
                <ComboboxOption key={id} value={description} />
              ))}
          </ComboboxList>
        </ComboboxPopover>
      </Combobox>
    </div>
  );
}
export default Search;