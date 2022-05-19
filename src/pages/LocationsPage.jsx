import Location from '../components/Location';
import {locations} from '../../db.json';

function LocationsPage() {
  return (
    <>
      {locations.map(loc => <Location key={loc.id} location={loc}/>)}
    </>
  );
}

export default LocationsPage;
