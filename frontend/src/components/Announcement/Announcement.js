import {
  Wrapper,
  ReadMore,
  Image,
  Comments,
  Title,
  Description,
  Board,
  Icon,
} from './Announcement.styled';
import PropTypes from 'prop-types';

import { FaHashtag } from 'react-icons/fa';
import { IconContext } from 'react-icons';

const Announcement = ({ title, photo, boardName, content, commentsNumber, isOpen }) => {
  const shortDescription = () => (content.length > 50 ? content.slice(0, 47) + '...  ' : content);

  const commentsString = () =>
    commentsNumber && (commentsNumber === 1 ? '[1 comment]' : `[${commentsNumber} comments]`);

  return (
    <Wrapper>
      {photo ? (
        <Image src={photo} alt="Board logo" />
      ) : (
        <IconContext.Provider value={{ color: 'white', size: '45px' }}>
          <Icon>
            <FaHashtag />
          </Icon>
        </IconContext.Provider>
      )}
      <div>
        <Board>{boardName}</Board>
        <Title>{title}</Title>
        {isOpen ? (
          <Description>{content}</Description>
        ) : (
          <>
            <p>
              {shortDescription()}
              {/*TODO: Jak będzie zrobiony react router, dodać Link w ReadMore, żeby po kliknięciu przechodzić na pełny widok ogłoszenia */}
              <ReadMore>[read more]</ReadMore>
            </p>
            <Comments>{commentsString()}</Comments>
          </>
        )}
      </div>
    </Wrapper>
  );
};

Announcement.propTypes = {
  title: PropTypes.string.isRequired,
  photo: PropTypes.string,
  boardName: PropTypes.string,
  content: PropTypes.string.isRequired,
  commentsNumber: PropTypes.number,
  isOpen: PropTypes.bool,
};

export default Announcement;
