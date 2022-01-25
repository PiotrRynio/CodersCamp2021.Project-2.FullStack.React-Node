import PropTypes from 'prop-types';
import {
  Wrapper,
  ReadMore,
  Comments,
  Title,
  Content,
  Board,
  ShortContent,
  TextWrapper,
  StyledLink,
} from './Announcement.styled';
import AnnouncementIcon from '../AnnouncementIcon/AnnouncementIcon';

const Announcement = ({ announcement, isOpen, showBoard }) => {
  const { title, iconType, boardName, content, comments, id } = announcement;

  const commentsText =
    comments && (comments.length === 1 ? '[1 comment]' : `[${comments.length} comments]`);

  return (
    <Wrapper>
      <AnnouncementIcon iconType={iconType} />
      <TextWrapper>
        <Board>{showBoard && boardName}</Board>
        <Title>{title}</Title>
        {isOpen ? (
          <Content>{content}</Content>
        ) : (
          <>
            <ShortContent>{content}</ShortContent>
            <StyledLink to={`/announcement/${id}`}>
              <ReadMore>[read&nbsp;more]</ReadMore>
              <Comments>{commentsText}</Comments>
            </StyledLink>
          </>
        )}
      </TextWrapper>
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
  showBoard: PropTypes.bool,
};

export default Announcement;
