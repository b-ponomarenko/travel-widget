export function getCarriers(flights) {
  const carriersHash = {};

  flights.forEach(flight => carriersHash[flight.carrier] = flight.carrier);

  return Object.keys(carriersHash).map(carrier => ({ title: carrier, id: Math.random()*1000 }));
}
