import { Wrapper, ReadMore, Comments, Title, Description, Board } from './Announcement.styled';
import PropTypes from 'prop-types';
import AnnouncementIcon from '../AnnouncementIcon/AnnouncementIcon';

const Announcement = ({ title, photo, boardName, content, commentsNumber, isOpen }) => {
  //const {  } = announcement;
  const shortDescription = () => (content.length > 50 ? content.slice(0, 47) + '...  ' : content);

  const commentsString = () =>
    commentsNumber && (commentsNumber === 1 ? '[1 comment]' : `[${commentsNumber} comments]`);

  return (
    <Wrapper>
      <AnnouncementIcon iconType={'default'} />
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
