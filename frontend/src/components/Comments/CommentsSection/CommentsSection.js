import { CommentForm } from '../CommentInputForm/CommentForm';
import { CommentList } from '../CommentList/CommentList';
import { useQuery, useMutation } from 'react-query';
import { Section } from 'components/Comments/CommentsSection/CommentsSection.styled';

export const CommentsSection = () => {
  const {
    data: dataQuery,
    isLoading,
    isError,
  } = useQuery('commentList', async () => {
    return await fetch('/commentLists').then((response) => response.json());
  });

  const {
    mutate,
    data: mutationData,
    error: isMutationError,
    isLoading: isLoadingMutation,
  } = useMutation((newComment) => {
    console.log(newComment);
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newComment),
    };
    return fetch('/commentLists', requestOptions).then((response) => response.json());
  });

  const handleCommentSubmit = (comment) => {
    mutate(comment);
  };

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error</div>;

  return (
    <Section>
      <CommentForm handleSubmit={handleCommentSubmit} />
      <CommentList comments={mutationData?.commentList || dataQuery.commentList} />
    </Section>
  );
};
