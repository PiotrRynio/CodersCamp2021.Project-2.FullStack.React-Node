import { FaBullhorn, FaBolt, FaDog, FaTint, FaCity } from 'react-icons/fa';
import PropTypes from 'prop-types';

const getIcon = (iconType) => {
  if (iconType === 'electricity') {
    return <FaBolt />;
  } else if (iconType === 'water') {
    return <FaTint />;
  } else if (iconType === 'pets') {
    return <FaDog />;
  } else if (iconType === 'city') {
    return <FaCity />;
  } else {
    return <FaBullhorn />;
  }
};

getIcon.propTypes = {
  iconType: PropTypes.oneOf(['electricity', 'water', 'pets', 'city']),
};

export default getIcon;
