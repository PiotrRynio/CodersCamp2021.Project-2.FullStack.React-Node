import { useState } from 'react';
import PropTypes from 'prop-types';
import {
  DescriptionContainer,
  DescriptionText,
  PostInfo,
  Distance,
  IconsContainer,
  Icon,
  BlueLink,
  BlueText,
} from './BoardDescription.styled';
import { FaEye, FaBell, FaPaperPlane } from 'react-icons/fa';
import { Button } from '../../Button/Button';

const BoardDescription = ({ descriptionText, postsNumber, lastPostDate, distance }) => {
  const [watch, setWatch] = useState(false);
  const [notify, setNotify] = useState(false);

  const truncatedText =
    descriptionText.length > 150 ? descriptionText.substr(0, 149) + '...' : descriptionText;

  return (
    <DescriptionContainer>
      <DescriptionText>
        {truncatedText}
        {descriptionText.length > 150 ? <BlueLink>&nbsp;Read&nbsp;more</BlueLink> : ''}
      </DescriptionText>
      <PostInfo>
        Posts in last month: <BlueText>{postsNumber}</BlueText>, last:{' '}
        <BlueText>{lastPostDate}</BlueText>
      </PostInfo>
      <Distance>{distance} km from you</Distance>
      <Button buttonName="Watch" icon={<FaPaperPlane />} />
      <IconsContainer>
        <Icon isActive={watch} onClick={() => setWatch((prevState) => !prevState)}>
          <FaEye />
        </Icon>
        <Icon isActive={notify} onClick={() => setNotify((prevState) => !prevState)}>
          <FaBell />
        </Icon>
      </IconsContainer>
    </DescriptionContainer>
  );
};

BoardDescription.propTypes = {
  descriptionText: PropTypes.string,
  postsNumber: PropTypes.number,
  lastPostDate: PropTypes.string,
  distance: PropTypes.number,
};

export default BoardDescription;
