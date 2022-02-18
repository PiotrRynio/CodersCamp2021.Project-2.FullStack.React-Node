import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import PropTypes from 'prop-types';
import Announcement from 'components/Announcement/Announcement';

const AnnouncementsList = ({ boardsIds, announcementsNumber, showBoardNames }) => {
  const { data, isLoading, isError } = useQuery('boards', async () => {
    return await fetch('/boards').then((response) => response.json());
  });

  const [announcements, setAnnouncements] = useState([]);

  useEffect(() => {
    if (!!data && !!data.boards) {
      const announcementsToShow = data.boards
        .filter(({ id }) => boardsIds.includes(id))
        .reduce((allAnnouncements, { announcements }) => {
          allAnnouncements.push(...announcements);
          return allAnnouncements;
        }, [])
        .sort(({ date: prevElement }, { date: nextElement }) => {
          const prevDate = new Date(prevElement);
          const nextDate = new Date(nextElement);
          return nextDate.getTime() - prevDate.getTime();
        })
        .slice(0, announcementsNumber);
      setAnnouncements(announcementsToShow);
    }
  }, [data, boardsIds]);

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
