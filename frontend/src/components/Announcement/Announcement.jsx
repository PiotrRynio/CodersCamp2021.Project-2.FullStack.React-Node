import { useForm } from "react-hook-form";
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
  const { register } = useForm();

  const commentsText =
    comments && (comments.length === 1 ? '[1 comment]' : `[${comments.length} comments]`);

  return (
    <Wrapper>
      <AnnouncementIcon iconType={iconType} {...register('icon', {required: true})}/>
      <TextWrapper>
        <Board {...register('boardName', {required: true})}>{showBoard && boardName}</Board>
        <Title {...register('title', {required: true})}>{title}</Title>
        {isOpen ? (
          <Content {...register('content', {required: true})}>{content}</Content>
        ) : (
          <>
            <ShortContent {...register('shortContent', {required: true})}>{content}</ShortContent>
            <StyledLink {...register('link', {required: true})} to={`/announcement/${id}`}>
              <ReadMore {...register('boardName')}>[read more]</ReadMore>
              <Comments {...register('commentText')}>{commentsText}</Comments>
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
