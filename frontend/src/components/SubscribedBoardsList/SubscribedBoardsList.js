import { useQuery } from 'react-query';
import { useContext } from 'react';
import { UserContext } from 'providers/AppProviders';
import BoardTitleSection from 'components/BoardTitleSection/BoardTitleSection';
import { BoardWrapper } from './SubscribedBoardsList.styled';
import { REST_API_URL } from '../../constants/restApiPaths';

export const SubscribedBoardsList = () => {
  const { user, setUser } = useContext(UserContext);
  const id = user.id;
  console.log(id);
  const path = `${REST_API_URL}/users/${id}/boards`;
  console.log(path);
  const { data, isLoading, isError } = useQuery('subscribedBoards', async () => {
    return await fetch(path, { credentials: 'include' })
      .then((response) => response.json())
      .then((data) => {
        return data;
      });
  });

  if (isLoading) {
    return <>Loading...</>;
  }
  if (isError) {
    return <>Error</>;
  }

  return (
    <>
      {data?.map((board) => (
        <BoardWrapper key={board.boardsIds}>
          <BoardTitleSection
            boardTitle={board.boardName}
            user={board.adminFirstName + ' ' + board.adminLastName}
            boardImg={board.avatarUrl}
            boardId={board.id}
          />
        </BoardWrapper>
      ))}
    </>
  );
};
