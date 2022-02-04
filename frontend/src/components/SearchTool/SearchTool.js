import Select, { components } from 'react-select';
import { RowInOptions, StyledOptions, Title } from './SearchTool.styled';
import { FaSearch } from 'react-icons/fa';
import { useQuery } from 'react-query';
import { FaCheck } from 'react-icons/fa';
import avatar1 from '../../mocks/images/avatars/sample-avatar1.jpg';
import { UserAvatar } from '../UserAvatar/UserAvatar';

export const SearchTool = (callback) => {
  const {
    data: dataAvailableForUserBoards,
    isLoadingAvailableBoards,
    isErrorAvailableBoards,
  } = useQuery('AvailableBoardsSearchTool', async () => {
    return await fetch('/board?isNearUser=true').then((response) =>
      response.json().then((data) =>
        data.boards.map((board) => {
          return { id: board.id, value: board.boardName, label: board.boardName };
        }),
      ),
    );
  });

  const {
    data: dataBoardsUserAlreadyAssigned,
    isLoadingBoardsAlreadyAssigned,
    isErrorBoardsAlreadyAssigned,
  } = useQuery('UserBoards', async () => {
    return await fetch('/user/1/boards').then((response) =>
      response.json().then((data) =>
        data.boards.map((board) => {
          return { id: board.id, value: board.boardName, label: board.boardName };
        }),
      ),
    );
  });

  const options = [
    { value: '1', label: 'temp1', icon: <FaCheck /> },
    { value: '2', label: 'temp2', icon: <FaCheck /> },
    { value: '3', label: 'temp3', icon: '' },
  ];

  const DropdownIndicator = (props) => {
    return (
      <components.DropdownIndicator {...props}>
        <FaSearch />
      </components.DropdownIndicator>
    );
  };
  const { Option } = components;
  const IconOption = (props) => (
    <Option {...props}>
      <RowInOptions>
        <UserAvatar userAvatarImage={avatar1} />
        {props.data.label}
        <FaCheck />
      </RowInOptions>
    </Option>
  );

  if (isLoadingBoardsAlreadyAssigned || isLoadingAvailableBoards) {
    return <div>Loading...</div>;
  }
  if (isErrorBoardsAlreadyAssigned || isErrorAvailableBoards) {
    return <div>Error</div>;
  }

  const indexBoardsAssigned = dataBoardsUserAlreadyAssigned?.map((el) => {
    return el.id;
  });

  console.log('XXXXXXXX');
  console.log(dataAvailableForUserBoards);

  /*  for (let i = 0; i < dataAvailableForUserBoards.length; i++) {
    /!*    if (indexBoardsAssigned.includes(dataAvailableForUserBoards[0].id)) {
      dataAvailableForUserBoards[i].icon = <FaCheck />;
    }*!/
    console.log('XXXXXXXX');
  }*/

  // console.log(typeof dataBoardsUserAlreadyAssigned);
  return (
    <>
      <Title>Explore!</Title>
      <Select
        styles={StyledOptions}
        options={dataAvailableForUserBoards}
        components={{ DropdownIndicator, Option: IconOption }}
        placeholder={'Search...'}
      />
    </>
  );
};
