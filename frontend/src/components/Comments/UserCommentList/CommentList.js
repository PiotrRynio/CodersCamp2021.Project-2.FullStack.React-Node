import { UserComment } from 'components/Comments/UserComment/UserComment';
import { Title } from 'components/Comments/UserCommentList/CommentList.styled';
import { useQuery } from 'react-query';

export const CommentList = () => {
  const { data, isLoading, isError } = useQuery('commentList', async () => {
    return await fetch('/commentLists').then((response) => response.json());
  });

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error</div>;

  return (
    <div data-testid={'userCommentList'}>
      <Title>Comments</Title>
      <div>
        {data.commentList.map((commentItem) => {
          return <UserComment key={commentItem.commentId} comment={commentItem} />;
        })}
      </div>
    </div>
  );
};
