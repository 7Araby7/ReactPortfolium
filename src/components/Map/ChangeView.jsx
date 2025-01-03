import { useMap } from 'react-leaflet';
import PropTypes from 'prop-types';

const ChangeView = ({ center }) => {
  const map = useMap();
  map.flyTo(center, 12);
  return null;
};

ChangeView.propTypes = {
  center: PropTypes.arrayOf(PropTypes.number).isRequired,
};

export default ChangeView;
