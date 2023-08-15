import React from "react";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";

import { useSelector } from "react-redux";

const containerStyle = {
  width: "100%",
  height: "350px",
  borderRadius: "20px",
};

function GoogleMaps() {
  const profileData = useSelector((state) => state.profileData);

  /*Latitude*/
  let lat = profileData.map((el) => {
    return el.address.geo.lat;
  });

  /* Longitude */
  let lng = profileData.map((el) => {
    return el.address.geo.lng;
  });

  let [latitude] = lat;
  let [longitude] = lng;
  const center = {
    lat: parseFloat(latitude),
    lng: parseFloat(latitude),
  };

  /* Used Google Map Api For developers */
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyDT9IWlGgZLCn2vaQrjyBPAPYMLhXUbprQ",
  });
  const [map, setMap] = React.useState(null);
  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  return isLoaded ? (
    <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={1}>
      <></>
    </GoogleMap>
  ) : (
    <></>
  );
}

export default GoogleMaps;
