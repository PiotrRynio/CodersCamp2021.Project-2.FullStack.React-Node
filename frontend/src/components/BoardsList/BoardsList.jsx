import { useQuery } from 'react-query';
import Board from 'components/Board/Board';
import { BoardWrapper } from './BoardList.styled';

const BoardsList = () => {
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

  const getDistanceFromCordinatesInKm = (firstCordinates, secondCordinates) => {
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

  navigator.geolocation.getCurrentPosition((position) => {
    console.log(
      getDistanceFromCordinatesInKm(
        { latitude: 53.32055555555556, longitude: -1.7297222222222221 },
        { latitude: 53.31861111111111, longitude: -1.6997222222222223 },
      ),
    );
  });

  return (
    <>
      {boardsData.boards.map((board) => (
        <BoardWrapper>
          <Board key={board.id} boardData={board} />
        </BoardWrapper>
      ))}
    </>
  );
};

export default BoardsList;
