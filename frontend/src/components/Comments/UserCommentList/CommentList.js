import { UserComment } from 'components/Comments/UserComment/UserComment';
import { Title } from 'components/Comments/UserCommentList/CommentList.styled';
import { useQuery } from 'react-query';

export const CommentList = () => {
  const { data, isLoading, isError } = useQuery('comments', async () => {
    return await fetch('/comments').then((response) => response.json());
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
