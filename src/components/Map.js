import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

// Fix default marker icon issue in Leaflet + React
import L from 'leaflet';
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

const center = [40.0228437, -74.1078352];

const markers = [
  { position: [40.0228437, -74.1078352], label: '🏠', popup: '125 Shore Dr (Home)' },
  { position: [40.0412, -74.0684], label: '🏖️', popup: 'Brick Beach 1' },
  { position: [40.0419, -74.0678], label: '🏖️', popup: 'Brick Beach 2' },
  { position: [40.0425, -74.0672], label: '🏖️', popup: 'Brick Beach 3' },
  { position: [40.0352, -74.0837], label: '🌳', popup: 'Windward Beach Park' },
  { position: [40.0765, -74.0558], label: '🍽️', popup: 'River Rock Restaurant' },
];

const Map = () => (
  <MapContainer center={center} zoom={12} style={{ width: '100%', height: 400, borderRadius: 16, margin: '0 auto' }} scrollWheelZoom={true}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    {markers.map((marker, idx) => (
      <Marker key={idx} position={marker.position}>
        <Popup>
          <span style={{ fontSize: '1.5em' }}>{marker.label}</span> <br />
          {marker.popup}
        </Popup>
      </Marker>
    ))}
  </MapContainer>
);

export default Map;
