import { FaSearch, FaCheck } from 'react-icons/fa';
import Select, { components } from 'react-select';
import { useQuery } from 'react-query';
import {
  BoardName,
  CheckIcon,
  LeftSideOfOptionRow,
  OptionRow,
  RightSideOfOptionRow,
  StyledOptions,
  Title,
  Container,
} from './SearchTool.styled';
import { UserAvatar } from 'components/UserAvatar/UserAvatar';

export const SearchTool = (callback, userID) => {
  const {
    data: dataAvailableForUserBoards,
    isLoadingAvailableBoards,
    isErrorAvailableBoards,
  } = useQuery('AvailableBoardsSearchTool', async () => {
    return await fetch('/boards?isNearUser=true')
      .then((response) => response.json())
      .then((data) =>
        data.boards.map((board) => {
          return {
            id: board.id,
            value: board.boardName,
            label: board.boardName,
            boardIcon: board.icon,
          };
        }),
      );
  });

  const {
    data: dataBoardsUserAlreadyAssigned,
    isLoadingBoardsAlreadyAssigned,
    isErrorBoardsAlreadyAssigned,
  } = useQuery('UserBoards', async () => {
    return await fetch(`/user/${userID}/boards`)
      .then((response) => response.json())
      .then((data) =>
        data.boards.map((board) => {
          return {
            id: board.id,
            value: board.boardName,
            label: board.boardName,
            boardIcon: board.boardIcon,
          };
        }),
      );
  });

  const handleBoardSelected = (e) => {
    callback(e.value);
  };

  const DropdownIndicator = (props) => {
    return (
      <components.DropdownIndicator {...props}>
        <FaSearch />
      </components.DropdownIndicator>
    );
  };
  const { Option } = components;
  const OptionInSelect = (props) => (
    <Option {...props} data-testid="select">
      <OptionRow>
        <LeftSideOfOptionRow>
          <UserAvatar userAvatarImage={props.data.boardIcon} />
          <BoardName>{props.data.label}</BoardName>
        </LeftSideOfOptionRow>
        <RightSideOfOptionRow>
          <CheckIcon>{props.data.icon}</CheckIcon>
        </RightSideOfOptionRow>
      </OptionRow>
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
  for (let i = 0; i < dataAvailableForUserBoards?.length; i++) {
    if (indexBoardsAssigned?.includes(dataAvailableForUserBoards[i].id)) {
      dataAvailableForUserBoards[i].icon = <FaCheck />;
    }
  }
  return (
    <Container>
      <Title>Explore!</Title>
      <Select
        closeMenuOnSelect={true}
        searchable={true}
        onChange={handleBoardSelected}
        styles={StyledOptions}
        options={dataAvailableForUserBoards}
        components={{ DropdownIndicator, Option: OptionInSelect }}
        placeholder={'Search...'}
      />
    </Container>
  );
};
