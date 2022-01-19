import { FaBullhorn, FaBolt, FaDog, FaTint } from 'react-icons/fa';
import { IconContainer } from './AnnouncementIcon.styled.js';
import PropTypes from 'prop-types';

const AnnouncementIcon = ({ iconType }) => {
  const properIcon = () => {
    if (iconType === 'electricity') {
      return <FaBolt />;
    } else if (iconType === 'water') {
      return <FaTint />;
    } else if (iconType === 'pets') {
      return <FaDog />;
    } else {
      return <FaBullhorn />;
    }
  };

  return <IconContainer>{properIcon()}</IconContainer>;
};

AnnouncementIcon.propTypes = {
  iconType: PropTypes.oneOf(['electricity', 'water', 'pets']),
};

export default AnnouncementIcon;
