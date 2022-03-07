import { useQuery } from 'react-query';
import Board from 'components/Board/Board';
import { BoardWrapper } from './BoardList.styled';
import { useState } from 'react';

const BoardsList = () => {
  const [userCords, setUserCords] = useState({ isSet: false });

  const {
    data: boardsData,
    isLoading,
    isError,
  } = useQuery('boards', async () => {
    return await fetch('/boards').then((response) => response.json());
  });

  if (isLoading || isError) {
    return <></>;
  }

  navigator.geolocation.getCurrentPosition(
    ({ coords }) =>
      setUserCords({ latitude: coords.latitude, longitude: coords.longitude, isSet: true }),
    () => setUserCords({ isSet: false }),
  );

  const getDistanceFromCoordinatesInKilometers = (firstCordinates, secondCordinates) => {
    const EARTH_RADIUS = 6371;
    const deg2rad = (deg) => deg * (Math.PI / 180);
    const latitude = deg2rad(firstCordinates.latitude - secondCordinates.latitude);
    const longitude = deg2rad(firstCordinates.longitude - secondCordinates.longitude);
    const distance =
      Math.sin(latitude / 2) ** 2 +
      Math.cos(deg2rad(firstCordinates.latitude)) ** 2 * Math.sin(longitude / 2) ** 2;
    return (
      Math.round(EARTH_RADIUS * 2 * Math.atan2(Math.sqrt(distance), Math.sqrt(1 - distance)) * 10) /
      10
    );
  };

  return (
    <>
      {boardsData.boards.map((board) => (
        <BoardWrapper key={board.id}>
          {userCords.isSet ? (
            <Board
              boardData={board}
              distanceFromUser={getDistanceFromCoordinatesInKilometers(board.coords, userCords)}
            />
          ) : (
            <Board boardData={board} />
          )}
        </BoardWrapper>
      ))}
    </>
  );
};

export default BoardsList;
