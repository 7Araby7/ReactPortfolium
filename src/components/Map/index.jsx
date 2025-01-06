import { useState } from 'react';
import ReactDOMServer from 'react-dom/server';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { HiHome } from 'react-icons/hi2';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import P from 'prop-types';

import ChangeView from './ChangeView';
import * as Styled from './style';
import { Button, Section } from '../../styles/globalStyle';
import { Loading } from './Loading';
import MotionWrapper from '../../utils/MotionWrapper';

/* const TITLE_EN = 'Sanding a hello from';
const TITLE_PT = 'Mandando um olá de'; */

/* const TITLE_EN = 'Where I am';
const TITLE_PT = 'Onde estou'; */

const TITLE_EN = 'Where to Find Me?';
const TITLE_PT = 'Onde Me Encontrar?';

const ME_EN = 'Me';
const ME_PT = 'Eu';

const YOU_EN = 'You';
const YOU_PT = 'Você';

const ALERT_EN = 'Permission to access GPS denied.';
const ALERT_PT = 'Permissão para acesso ao GPS negada.';

const Map = ({ language = 'us' }) => {
  const fadeInVariants = {
    hidden: { opacity: 0, scale: 0, transition: { duration: 0.5 } },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  const [userCoords, setUserCoords] = useState(null);
  const [clicked, setClicked] = useState(false);
  const [coords, setCoords] = useState([-25.438035, -49.33733]);

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
            alert(language === 'us' ? ALERT_EN : ALERT_PT);
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
    <Section id="map">
      <Styled.MapTitle>
        {language === 'us' ? TITLE_EN : TITLE_PT} <hr />
      </Styled.MapTitle>
      <MotionWrapper threshold={0.4} variants={fadeInVariants}>
        <Styled.Subtitles>
          <Styled.coordsButton onClick={() => handleChange(meCoords)}>
            <FaMapMarkerAlt style={{ color: 'var(--accent)', fontSize: '30px', translate: '0 6px' }} />:{' '}
            {language === 'us' ? ME_EN : ME_PT}
          </Styled.coordsButton>
          {userCoords ? (
            <Styled.coordsButton onClick={() => handleChange(userCoords)}>
              <HiHome style={{ color: 'var(--accent)', fontSize: '30px', translate: '0 6px' }} />:{' '}
              {language === 'us' ? YOU_EN : YOU_PT}
            </Styled.coordsButton>
          ) : clicked ? (
            <Loading />
          ) : (
            <Button $padding={'8px'} $fontSize={'1rem'} $marginTop={'1rem'} onClick={handleClick}>
              {language === 'us' ? `${YOU_EN}?` : `${YOU_PT}?`}
            </Button>
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
      </MotionWrapper>
    </Section>
  );
};

Map.propTypes = {
  language: P.string,
};

export default Map;
