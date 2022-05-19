import {MapContainer, Marker, Popup, TileLayer} from 'react-leaflet'
import 'leaflet/dist/leaflet.css';

const styles = {
  container: {
    width: '300px',
    height: '300px',
  },
};

function LeafletMap({coords}) {
  return (
      <MapContainer
        center={coords}
        zoom={16}
        scrollWheelZoom={false}
        style={styles.container}
      >
        <TileLayer
          attribution=''
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={coords}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
  );
}

export default LeafletMap;
