import { FaBullhorn, FaBolt, FaDog, FaTint } from 'react-icons/fa';
import { IconContainer } from './AnnouncementIcon.styled.js';
import PropTypes from 'prop-types';

const AnnouncementIcon = ({ iconType }) => {
  const properIcon = () => {
    if (iconType === 'electricity') {
      return <FaBolt aria-label="electricity icon" />;
    } else if (iconType === 'water') {
      return <FaTint aria-label="water icon" />;
    } else if (iconType === 'pets') {
      return <FaDog aria-label="pets icon" />;
    } else {
      return <FaBullhorn aria-label="default icon" />;
    }
  };

  return <IconContainer aria-label="icon container">{properIcon()}</IconContainer>;
};

AnnouncementIcon.propTypes = {
  iconType: PropTypes.oneOf(['electricity', 'water', 'pets']),
};

export default AnnouncementIcon;
