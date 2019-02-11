const hq_street = 42;

function distanceFromHqInBlocks(street) {
  return Math.abs(hq_street - street);
}

const street_length = 264;

function distanceFromHqInFeet(street) {
  return distanceFromHqInBlocks(street) * street_length;
}

function distanceTravelledInFeet(start, end) {
  return Math.abs(end - start) * street_length;
}

function calculatesFarePrice(start, end) {
  const dist = distanceTravelledInFeet(start, end);
  switch (true) {
    case dist <= 400:
      return 0;
      break;
    case dist <= 2000:
      return 0.02 * (dist - 400);
      break;
    case dist <= 2500:
      return 25;
      break;
    default:
      return "cannot travel that far";
  }
}
