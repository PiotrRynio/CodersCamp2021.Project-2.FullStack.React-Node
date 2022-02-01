import Select, { components } from 'react-select';
import { StyledOptions } from './Search.styled';
import { FaSearch } from 'react-icons/fa';
import { useQuery } from 'react-query';

export const SearchTool = (callback) => {
  const {
    data: dataAvailableBoards,
    isLoadingAvailableBoards,
    isErrorAvailableBoards,
  } = useQuery('AvailableUserBoards', async () => {
    return await fetch('/boards/isNearUser=true').then((response) =>
      response.json().then((response) => {
        response.boards.map((board) => {
          return { value: board.boardName, label: board.boardName };
        });
      }),
    );
  });
  const {
    data: dataUserBoards,
    isLoadingUserBoards,
    isErrorUserBoards,
  } = useQuery('UserBoards', async () => {
    return await fetch('/users/1/boards').then((response) =>
      response.json().then((response) => {
        response.boards.map((board) => {
          return { value: board.boardName, label: board.boardName };
        });
      }),
    );
  });

  const options = [
    { value: '1', label: 'temp1', isMember: true },
    { value: '2', label: 'temp2', isMember: false },
    { value: '3', label: 'temp3', isMember: true },
  ];
  const DropdownIndicator = (props) => {
    return (
      <components.DropdownIndicator {...props}>
        <FaSearch />
      </components.DropdownIndicator>
    );
  };

  if (isLoadingUserBoards || isLoadingAvailableBoards) {
    return <div>Loading...</div>;
  }
  if (isErrorUserBoards || isLoadingAvailableBoards) {
    return <div>Error</div>;
  }
  return (
    <>
      <h3>Explore</h3>
      <Select
        styles={StyledOptions}
        components={{ DropdownIndicator }}
        options={options}
        placeholder={''}
      />
    </>
  );
};
