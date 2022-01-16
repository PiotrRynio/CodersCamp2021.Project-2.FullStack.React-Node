import {
  Wrapper,
  ReadMore,
  Image,
  Comments,
  Title,
  Description,
  Board,
} from './Announcement.styled';
import PropTypes from 'prop-types';

const Announcement = ({ title, photo, boardName, content, commentsNumber, isOpen }) => {
  const getShortDescription = (desc) => {
    if (desc.length > 50) {
      return desc.slice(0, 47) + '...  ';
    } else {
      return desc;
    }
  };

  const commentsString = () => {
    if (commentsNumber === 1) {
      return '[1 comment]';
    } else if (commentsNumber > 1) {
      return `[${commentsNumber} comments]`;
    } else {
      return null;
    }
  };

  return (
    <Wrapper>
      <Image src={photo} alt="Board logo" />
      <div>
        <Board>{boardName}</Board>
        <Title>{title}</Title>
        {isOpen ? (
          <Description>{content}</Description>
        ) : (
          <>
            <p>
              {getShortDescription(content)}
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
