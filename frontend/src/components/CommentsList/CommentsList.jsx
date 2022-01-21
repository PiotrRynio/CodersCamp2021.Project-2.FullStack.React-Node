import { UserComment } from 'components/Comments/UserComment/UserComment';
import { Title } from 'components/CommentsList/CommentsList.styled';
import { useQuery } from 'react-query';

const CommentsList = ({ announcementId }) => {
  const { data, isLoading, isError } = useQuery('commentList', async () => {
    return await fetch(`/comments/${announcementId}`).then((response) => response.json());
  });

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error</div>;

  return (
    <div data-testid={'userCommentList'}>
      <Title>Comments</Title>
      <div>
        {data.map((commentItem) => {
          return <UserComment key={commentItem.id} comment={commentItem} />;
        })}
      </div>
    </div>
  );
};

export default CommentsList;
