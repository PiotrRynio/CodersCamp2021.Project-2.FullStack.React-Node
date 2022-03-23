import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Announcement from 'components/Announcement/Announcement';
import { CommentsSection } from 'components/CommentsSection/CommentsSection';
import { REST_API_URL } from '../../constants/restApiPaths';

const AnnouncementDetails = () => {
  const { id } = useParams();

  const { data, isLoading, isError } = useQuery('boardsList', async () => {
    return await fetch(`${REST_API_URL}/announcements/${id}`)
      .then((response) => response.json())
      .then(({ announcement }) => announcement);
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
