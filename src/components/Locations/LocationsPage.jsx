import {locations} from '../../../db.json';

function LocationsPage() {
  return (
    <>
      <h1>Locations</h1>
      <ul>
        {locations.map((loc, i) => (
          <li key={loc.id}>
            {loc.name}
          </li>
        ))}
      </ul>
    </>
  );
}

export default LocationsPage;
