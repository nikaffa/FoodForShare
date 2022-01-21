import React, { useState, useCallback, useRef, useEffect } from "react";
import axios from "axios";
import { Marginer } from "./Marginer";
import { LogoTitle } from "./BrandLogo";
import {
  BoxContainer,
} from "./Common";
//import { Link } from "react-router-dom";

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

const places = {
  "places": [
    {
      "properties": {
        "NAME": "Restaurant",
        "ADDRESS": "8720 Russell Road",
      },
      "geometry": {
        "type": "Point",
        "coordinates": [-75.3372987731628, 45.383321536272049]
      }
    },
    {
      "properties": {
        "NAME": "Food bank",
        "ADDRESS": "1490 Youville Drive",
      },
      "geometry": {
        "type": "Point",
        "coordinates": [-75.546518086577947, 45.467134581917357]
      }
    }, 
  ]
}

// {
//   1: {
//   id: 1,
//   user_id: 1,
//   donation_date: "2022-01-01T08:00:00.000Z",
//   status: "Pick-Up"
//   },
//   2: {
//   id: 2,
//   user_id: 1,
//   donation_date: "2022-02-01T08:00:00.000Z",
//   status: "Pick-Up"
//   },
//   3: {
//   id: 3,
//   user_id: 1,
//   donation_date: "2022-03-01T08:00:00.000Z",
//   status: "Pick-Up"
//   },
//   4: {
//   id: 4,
//   user_id: 1,
//   donation_date: "2022-04-01T07:00:00.000Z",
//   status: "Pick-Up"
//   },
//   5: {
//   id: 5,
//   user_id: 2,
//   donation_date: "2022-04-01T07:00:00.000Z",
//   status: "Pick-Up"
//   }
//   }

//google maps library
const libraries = ["places"];

//map container style
const mapContainerStyle = {
  height: "50vh",
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
 
export function Map(props) {

  // //sets locations to be shown on the map
  //   useEffect(() => {
  //     axios.get("http://localhost:8080/donations")
  //     .then(res => { 
  //       console.log(res);
  //       setPlaces(res.data);  
  //     })
  //   }, [])

  //hook to run google script
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_API_KEY,
    libraries: libraries,
  });

  const [selected, setSelected] = useState(null);
  const [places, setPlaces] = useState([]);
  //const [donationItems, setDonationItems] = useState([]);

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

        {places.map((place) => (
          <Marker 
          key={place.id}
          position={{
            lat: place.location.coordinates[1],
            lng: place.location.coordinates[0]
          }}
          onClick={() => {
            setSelected(place);
          }} />
        ))}
          
        {selected && (
          <InfoWindow
            position={{ lat: selected.location.coordinates[1], lng: selected.location.coordinates[0] }}
            onCloseClick={() => {
              setSelected(null);
            }}
          >
          <div>
            <h2>{selected.name}</h2>
            <p><strong>{selected.properties.LEFTOVER}</strong> portions left</p>
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
