import { useQuery, useMutation } from 'react-query';
import { Section } from 'components/CommentsSection/CommentsSection.styled';
import { CommentForm } from '../CommentForm/CommentForm';
import { CommentList } from '../CommentList/CommentList';

export const CommentsSection = () => {
  const {
    data: dataQuery,
    isLoading,
    isError,
  } = useQuery('commentList', async () => {
    return await fetch('/announcements/${announcementId}/comments').then((response) => response.json());
  });

  const {
    mutate,
    data: mutationData,
    error: isMutationError,
    isLoading: isLoadingMutation,
  } = useMutation((newComment) => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newComment),
    };
    return fetch('/announcements/1/comments', requestOptions).then((response) => response.json());
  });

  const handleCommentSubmit = (comment) => {
    mutate(comment);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>Error</div>;
  }

  return (
    <Section>
      <CommentForm handleSubmit={handleCommentSubmit} />
      <CommentList comments={mutationData?.commentList || dataQuery.commentList} />
    </Section>
  );
};
