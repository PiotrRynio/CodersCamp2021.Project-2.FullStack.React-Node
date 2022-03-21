import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import PropTypes from 'prop-types';
import Announcement from 'components/Announcement/Announcement';
import { REST_API_URL } from '../../constants/restApiPaths';

const AnnouncementsList = ({ boardsIds, announcementsNumber, showBoardNames }) => {
  const { data, isLoading, isError } = useQuery('boardAnnouncements', async () => {
    return await fetch(`${REST_API_URL}/boards/${boardsIds[0]}/announcements`).then((response) =>
      response.json(),
    );
  });

  const [announcements, setAnnouncements] = useState([]);

  useEffect(() => {
    if (!!data && !!data.announcements) {
      const announcementsToShow = data.announcements
        .sort(({ date: prevElement }, { date: nextElement }) => {
          const prevDate = new Date(prevElement);
          const nextDate = new Date(nextElement);
          return nextDate.getTime() - prevDate.getTime();
        })
        .slice(0, announcementsNumber);
      setAnnouncements(announcementsToShow);
    }
  }, [data, boardsIds, announcementsNumber]);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>Error</div>;
  }

  return (
    <>
      {announcements.map((announcement) => (
        <Announcement
          key={announcement.id}
          announcement={announcement}
          showBoard={showBoardNames}
        />
      ))}
    </>
  );
};

AnnouncementsList.propTypes = {
  boardsIds: PropTypes.array.isRequired,
  announcementsNumber: PropTypes.number,
  showBoardNames: PropTypes.bool,
};

export default AnnouncementsList;
