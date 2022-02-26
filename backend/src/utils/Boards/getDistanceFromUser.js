export const getDistanceFromCoordinatesInKm = (firstCordinates, secondCordinates) => {
  const EARTH_RADIUS = 6371;
  const deg2rad = (deg) => deg * (Math.PI / 180);
  const latitude = deg2rad(firstCordinates.latitude - secondCordinates.latitude);
  const longitude = deg2rad(firstCordinates.longitude - secondCordinates.longitude);
  const distance =
    Math.sin(latitude / 2) ** 2 +
    Math.cos(deg2rad(firstCordinates.latitude)) ** 2 * Math.sin(longitude / 2) ** 2;
  return (
    Math.round(EARTH_RADIUS * 2 * Math.atan2(Math.sqrt(distance), Math.sqrt(1 - distance)) * 10) /
    10
  );
};
