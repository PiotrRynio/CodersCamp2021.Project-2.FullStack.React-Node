import { useQuery, useMutation } from 'react-query';
import { Section } from 'components/CommentsSection/CommentsSection.styled';
import { CommentForm } from '../CommentForm/CommentForm';
import { CommentList } from '../CommentList/CommentList';
import { REST_API_URL } from '../../constants/restApiPaths';

export const CommentsSection = ({ announcementId }) => {
  const {
    data: dataQuery,
    isLoading,
    isError,
    refetch,
  } = useQuery('commentList', async () => {
    return await fetch(`${REST_API_URL}/announcements/${announcementId}/comments`)
      .then((response) => response.json())
      .then((data) => {
        return data;
      });
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
      <CommentList comments={dataQuery.comments} />
    </Section>
  );
};
