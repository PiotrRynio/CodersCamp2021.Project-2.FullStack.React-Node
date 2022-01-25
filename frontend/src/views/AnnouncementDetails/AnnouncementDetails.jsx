import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Announcement from 'components/Announcement/Announcement';
import { CommentsSection } from 'components/CommentsSection/CommentsSection';

const AnnouncementDetails = () => {
  const { id } = useParams();

  const { data, isLoading, isError } = useQuery('boardsList', async () => {
    return await fetch(`/announcements/${id}`).then((response) => response.json());
  });

  if (isLoading || isError) {
    return <></>;
  }

  return (
    <>
      <Announcement announcement={data} isOpen={true} />
      <CommentsSection announcementId={id} />
    </>
  );
};

export default AnnouncementDetails;
