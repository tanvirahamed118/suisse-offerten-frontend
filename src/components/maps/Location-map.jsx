import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import PropTypes from "prop-types";
import { useState, useEffect } from "react";

const apiKey = import.meta.env.VITE_APP_GOOGLE_MAP_API;

const LocationMap = ({ location }) => {
  const mapStyles = {
    height: "200px",
    width: "100%",
    borderRadius: "15px",
    overflow: "hidden",
  };

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: apiKey,
  });

  const [center, setCenter] = useState(location);

  // Update map center whenever the location prop changes
  useEffect(() => {
    setCenter(location);
  }, [location]);

  if (!isLoaded) return <div>Loading...</div>;

  return (
    <GoogleMap mapContainerStyle={mapStyles} zoom={13} center={center}>
      <Marker position={center} />
    </GoogleMap>
  );
};

LocationMap.propTypes = {
  location: PropTypes.shape({
    lat: PropTypes.number,
    lng: PropTypes.number,
  }),
};

export default LocationMap;
