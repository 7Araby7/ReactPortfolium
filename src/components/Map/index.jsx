import { useState } from 'react';
import ReactDOMServer from 'react-dom/server';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { HiHome } from 'react-icons/hi2';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

import ChangeView from './ChangeView';
import * as Styled from './style';
import { Section } from '../../styles/globalStyle';
import { Loading } from './Loading';

const Map = () => {
  const [userCoords, setUserCoords] = useState(null);
  const [clicked, setClicked] = useState(false);
  const [coords, setCoords] = useState([-25.4367, -49.3368]);

  const handleClick = () => {
    setClicked(true);

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserCoords([position.coords.latitude, position.coords.longitude]);
          setCoords([position.coords.latitude, position.coords.longitude]);
        },
        (error) => {
          if (error.code === error.PERMISSION_DENIED) {
            alert('Permissão para acesso ao GPS foi negada.');
          } else {
            console.log('Erro ao tentar acessar a localização:', error.message);
          }
          setClicked(false);
        },
      );
    } else {
      console.log('Geolocation não é suportada nesse navegador.');
    }
  };

  const handleChange = (c) => {
    setCoords(c);
  };

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

  const meCoords = [-25.438035, -49.33733];

  return (
    <Section>
      <Styled.MapTitle>
        Where am I? <hr />
      </Styled.MapTitle>
      <Styled.Subtitles>
        <Styled.coordsButton onClick={() => handleChange(meCoords)}>
          <FaMapMarkerAlt style={{ color: 'var(--accent)', fontSize: '30px', translate: '0 6px' }} />: Me
        </Styled.coordsButton>
        {userCoords ? (
          <Styled.coordsButton onClick={() => handleChange(userCoords)}>
            <HiHome style={{ color: 'var(--accent)', fontSize: '30px', translate: '0 6px' }} />: You
          </Styled.coordsButton>
        ) : (
          <Styled.PermissionButton onClick={handleClick}>{clicked ? <Loading /> : 'You?'}</Styled.PermissionButton>
        )}
      </Styled.Subtitles>
      <Styled.MapContainer>
        <MapContainer
          center={coords}
          zoom={12}
          scrollWheelZoom={true}
          zoomControl={false}
          attributionControl={false}
          className="map"
        >
          <ChangeView center={coords} />
          <TileLayer
            url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
            attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors &copy; <a href='https://carto.com/'>CARTO</a>"
          />
          {userCoords && (
            <Marker position={userCoords} icon={youMapSvgIcon}>
              <Popup>Your location</Popup>
            </Marker>
          )}
          <Marker position={meCoords} icon={meMapSvgIcon}>
            <Popup>Curitiba, Brazil</Popup>
          </Marker>
        </MapContainer>
      </Styled.MapContainer>
    </Section>
  );
};

export default Map;
