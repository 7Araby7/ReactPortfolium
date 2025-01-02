import { useEffect, useState } from 'react';
import ReactDOMServer from 'react-dom/server';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { HiHome } from 'react-icons/hi2';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

import * as Styled from './style';

const Map = () => {
  const [userCoords, setUserCoords] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setUserCoords([position.coords.latitude, position.coords.longitude]);
      });
    } else {
      console.log('Geolocation não é suportada nesse navegador.');
    }
  }, []);

  const meMapSvgIcon = new L.DivIcon({
    html: ReactDOMServer.renderToString(
      <FaMapMarkerAlt style={{ color: 'var(--accent)', fontSize: '30px', translate: '0 -20px' }} />,
    ),
    className: '',
    iconSize: [40, 40],
  });

  const youMapSvgIcon = new L.DivIcon({
    html: ReactDOMServer.renderToString(<HiHome style={{ color: 'var(--accent)', fontSize: '30px' }} />),
    className: '',
    iconSize: [40, 40],
  });

  const curitibaCoords = [-25.4367, -49.3368];

  return (
    <Styled.Section>
      <Styled.H1>
        Where am I? <hr />
      </Styled.H1>
      <Styled.Subtitles>
        <p>
          <FaMapMarkerAlt style={{ color: 'var(--accent)', fontSize: '30px', translate: '0 6px' }} />: Me
        </p>
        <p>
          <HiHome style={{ color: 'var(--accent)', fontSize: '30px', translate: '0 6px' }} />: You
        </p>
      </Styled.Subtitles>
      <MapContainer
        center={userCoords || curitibaCoords}
        zoom={11}
        scrollWheelZoom={true}
        zoomControl={false}
        className="map"
      >
        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
          attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors &copy; <a href='https://carto.com/'>CARTO</a>"
        />
        {userCoords && (
          <Marker position={userCoords} icon={youMapSvgIcon}>
            <Popup>Your location</Popup>
          </Marker>
        )}
        <Marker position={curitibaCoords} icon={meMapSvgIcon}>
          <Popup>Curitiba, Brazil</Popup>
        </Marker>
      </MapContainer>
    </Styled.Section>
  );
};

export default Map;
