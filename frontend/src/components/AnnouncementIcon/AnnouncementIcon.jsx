import { FaBullhorn, FaBolt, FaDog, FaTint } from 'react-icons/fa';
import { IconContainer } from './AnnouncementIcon.styled.js';
import PropTypes from 'prop-types';

const AnnouncementIcon = ({ iconType }) => {
  const properIcon = () => {
    if (iconType === 'electricity') {
      return <FaBolt role="electricity-icon" />;
    } else if (iconType === 'water') {
      return <FaTint role="water-icon" />;
    } else if (iconType === 'pets') {
      return <FaDog role="pets-icon" />;
    } else {
      return <FaBullhorn role="default-icon" />;
    }
  };

  return <IconContainer>{properIcon()}</IconContainer>;
};

AnnouncementIcon.propTypes = {
  iconType: PropTypes.oneOf(['electricity', 'water', 'pets']),
};

export default AnnouncementIcon;
