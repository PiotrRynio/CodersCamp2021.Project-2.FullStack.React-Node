import { Comment } from 'components/Comments/Comment/Comment';
import { Title } from 'components/Comments/CommentList/CommentList.styled';
import { useQuery } from 'react-query';

export const CommentList = () => {
  const { data, isLoading, isError } = useQuery('commentList', async () => {
    return await fetch('/commentLists').then((response) => response.json());
  });

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error</div>;

  return (
    <div data-testid={'commentList'}>
      <Title>Comments</Title>
      <div>
        {data.commentList.map((commentItem) => {
          return <Comment key={commentItem.commentId} comment={commentItem} />;
        })}
      </div>
    </div>
  );
};
