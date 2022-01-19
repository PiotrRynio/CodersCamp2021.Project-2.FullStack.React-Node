import { Wrapper, ReadMore, Comments, Title, Content, Board } from './Announcement.styled';
import PropTypes from 'prop-types';
import AnnouncementIcon from '../AnnouncementIcon/AnnouncementIcon';

const Announcement = ({ announcement, isOpen, descriptionLength = 50, showBoard }) => {
  const { title, iconType, boardName, content, comments } = announcement;
  const shortDescription =
    content.length > descriptionLength ? content.slice(0, descriptionLength) + '...  ' : content;

  const commentsText =
    comments && (comments.length === 1 ? '[1 comment]' : `[${comments.length} comments]`);

  return (
    <Wrapper>
      <AnnouncementIcon iconType={iconType} />
      <div>
        <Board>{showBoard ? boardName : undefined}</Board>
        <Title>{title}</Title>
        <Content>
          {isOpen ? content : shortDescription}
          {/*TODO: Jak będzie zrobiony react router, dodać Link w ReadMore, żeby po kliknięciu przechodzić na pełny widok ogłoszenia */}
          {isOpen || content === shortDescription ? undefined : (
            <ReadMore>[read&nbsp;more]</ReadMore>
          )}
        </Content>
        <Comments>{commentsText}</Comments>
      </div>
    </Wrapper>
  );
};

Announcement.propTypes = {
  announcement: PropTypes.shape({
    title: PropTypes.string.isRequired,
    iconType: PropTypes.string,
    boardName: PropTypes.string,
    content: PropTypes.string.isRequired,
    comments: PropTypes.array,
  }),
  isOpen: PropTypes.bool,
  descriptionLength: PropTypes.number,
  showBoard: PropTypes.bool,
};

export default Announcement;
