import PropTypes from 'prop-types';
import AnnouncementIcon from 'components/AnnouncementIcon/AnnouncementIcon';
import StyledLink from 'components/StyledLink/StyledLink';
import {
  Wrapper,
  ReadMore,
  Comments,
  Title,
  Content,
  Board,
  ShortContent,
  TextWrapper,
} from './Announcement.styled';

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
              <ReadMore>[read more]</ReadMore>
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
