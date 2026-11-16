export function getFacilityDirectionsUrl(facility, location) {
  const destination = `${facility.latitude},${facility.longitude}`;
  const origin = location ? `${location.latitude},${location.longitude}` : "";
  const route = origin ? `${origin};${destination}` : destination;
  return `https://www.openstreetmap.org/directions?engine=fossgis_osrm_car&route=${encodeURIComponent(route)}`;
}
