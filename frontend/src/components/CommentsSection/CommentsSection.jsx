import { useQuery, useMutation } from 'react-query';
import { Section } from 'components/CommentsSection/CommentsSection.styled';
import { CommentForm } from '../CommentForm/CommentForm';
import { CommentList } from '../CommentList/CommentList';

export const CommentsSection = ({ announcementId }) => {
  const {
    data: dataQuery,
    isLoading,
    isError,
    refetch,
  } = useQuery('commentList', async () => {
    return await fetch(`/announcements/${announcementId}/comments`).then((response) =>
      response.json(),
    );
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>Error</div>;
  }

  return (
    <Section>
      <CommentForm announcementId={announcementId} refetchCallback={refetch} />
      <CommentList comments={dataQuery.commentList} />
    </Section>
  );
};
