import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Announcement from 'components/Announcement/Announcement';
import { CommentsSection } from '../../components/CommentsSection/CommentsSection';

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
      {console.log(data)}
      <Announcement announcement={data} isOpen={true} />
      <CommentsSection announcementId={id} />
    </>
  );
};

export default AnnouncementsDetails;
