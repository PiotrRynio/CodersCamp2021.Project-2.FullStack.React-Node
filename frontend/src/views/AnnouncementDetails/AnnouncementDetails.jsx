import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Announcement from '../../components/Announcement/Announcement';
import CommentsList from '../../components/CommentsList/CommentsList';

const AnnouncementsDetails = () => {
  const { id } = useParams();

  const { data, isLoading, isError } = useQuery('boardsList', async () => {
    return await fetch(`/announcements/${id}`).then((response) => response.json());
  });

  if (isLoading || isError) {
    return <div />;
  }

  return (
    <>
      <Announcement announcement={data} isOpen={true} />
      <CommentsList announcementId={id} />
    </>
  );
};

export default AnnouncementsDetails;