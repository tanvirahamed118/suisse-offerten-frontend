const fetchCoordinates = async (city, zipCode) => {
  const apiKey = import.meta.env.VITE_APP_GOOGLE_MAP_API;
  const response = await fetch(
    `https://maps.googleapis.com/maps/api/geocode/json?address=${city},${zipCode}&key=${apiKey}`
  );

  const data = await response.json();

  if (data.results.length > 0) {
    const { lat, lng } = data.results[0].geometry.location;
    return { lat, lng };
  } else {
    throw new Error("Location not found");
  }
};

export default fetchCoordinates;
