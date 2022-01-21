import React, { useState, useCallback, useRef, useEffect } from "react";
import axios from "axios";
import { Marginer } from "./Marginer";
import { LogoTitle } from "./BrandLogo";
import {
  BoxContainer,
} from "./Common";

//map
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


//google maps library
const libraries = ["places"];

//map container style
const mapContainerStyle = {
  height: "50vh",
  width: "100vw",
};
const center = {
  lat: 43.651070,
  lng: -79.347015
};
const options = {
  disableDefaultUI: true,
  zoomControl: true,
};
 
export function Map(props) {

  const [places, setPlaces] = useState([]);
  const [selected, setSelected] = useState(null);

  //sets places to be shown on the map
  useEffect(() => {
    axios.get("http://localhost:8080/users")
    .then(res => { 
      setPlaces(res.data); 
    })
  }, [])

  //runs google script
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: 'AIzaSyCECGSXk2qCMz9NrHdnuVwYFiwQbpANhKE',
    libraries: libraries,
  });

  

  //retains state without rerenders
  const mapRef = useRef();
  //returns a map instance, prevents rerenders
  const onMapLoad = useCallback((map) => {
    mapRef.current = map;
  }, []);

  //geolocating
  const panTo = useCallback(({ lat, lng }) => {
    mapRef.current.panTo({ lat, lng });
    mapRef.current.setZoom(14);
  }, []);

  if (loadError) return "Error";
  if (!isLoaded) return "Loading...";

  return (
    <BoxContainer>
      <GoogleMap
          id="map"
          mapContainerStyle={mapContainerStyle}
          zoom={8}
          center={center}
          options={options}
          onLoad={onMapLoad}
        >
        <Locate panTo={panTo} /> 
        <SearchMe panTo={panTo} />
        {places.places.map((place) => (
          <Marker 
          // key={place.id}
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
          </div>
        </InfoWindow>
        )}
      </GoogleMap>

      <Marginer direction="vertical" margin="3em" />

      {selected && (<LogoTitle>Food is shown here</LogoTitle>)}
     
    </BoxContainer>
  );
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
