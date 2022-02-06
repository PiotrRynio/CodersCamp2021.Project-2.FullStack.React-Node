import { useState } from 'react';
import { FaEye, FaBell, FaPaperPlane } from 'react-icons/fa';
import PropTypes from 'prop-types';
import {
  DescriptionContainer,
  DescriptionText,
  PostsInfo,
  Distance,
  IconsContainer,
  Icon,
  BlueLink,
  BlueText,
} from './BoardDescription.styled';
import { Button } from 'components/Button/Button';
import StyledLink from 'components/StyledLink/StyledLink';

const BoardDescription = ({
  descriptionText,
  postsNumber,
  lastPostDate,
  distanceFromUser,
  boardId,
  isButtonAndDistanceHidden = false,
}) => {
  const [watch, setWatch] = useState(false);
  const [notify, setNotify] = useState(false);

  const truncatedText =
    descriptionText.length > 150 ? descriptionText.substr(0, 149) + '...' : descriptionText;

  return (
    <DescriptionContainer>
      <DescriptionText>
        {truncatedText}
        <StyledLink to={`/board/${boardId}`}>
          {descriptionText.length > 150 ? <BlueLink>&nbsp;Read&nbsp;more</BlueLink> : ''}
        </StyledLink>
      </DescriptionText>
      <PostsInfo>
        Posts in last month: <BlueText>{postsNumber}</BlueText>, last:{' '}
        <BlueText>{lastPostDate}</BlueText>
      </PostsInfo>
      {isButtonAndDistanceHidden ? (
        <></>
      ) : (
        <Distance>
          {distanceFromUser} km from you
          <Button buttonName="Watch" icon={<FaPaperPlane />} />
        </Distance>
      )}

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
