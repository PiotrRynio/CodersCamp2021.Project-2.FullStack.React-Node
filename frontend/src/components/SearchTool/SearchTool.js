import { FaCheck } from 'react-icons/fa';
import Select, { components } from 'react-select';
import { useQuery } from 'react-query';
import {
  BoardName,
  CheckIcon,
  LeftSideOfOptionRow,
  OptionRow,
  RightSideOfOptionRow,
  StyledOptions,
} from './SearchTool.styled';
import { UserAvatar } from 'components/UserAvatar/UserAvatar';
import StyledLink from 'components/StyledLink/StyledLink';
import { BOARDS_PATH, REST_API_URL } from 'constants/restApiPaths';

export const SearchTool = (callback, userID) => {
  const {
    data: dataAvailableForUserBoards,
    isLoadingAvailableBoards,
    isErrorAvailableBoards,
  } = useQuery('AvailableBoardsSearchTool', async () => {
    return await fetch(`${REST_API_URL}${BOARDS_PATH}`)
      .then((response) => response.json())
      .then((data) =>
        data.boards.map((board) => {
          return {
            id: board._id,
            value: board.boardName,
            label: board.boardName,
            boardIcon: board.avatarUrl,
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
            boardIcon: board.avatarUrl,
          };
        }),
      );
  });

  const handleBoardSelected = (e) => {
    callback(e.value);
  };

  const DropdownIndicator = (props) => {
    return <components.DropdownIndicator {...props} />;
  };
  const { Option } = components;
  const OptionInSelect = (props) => (
    <StyledLink to={`/board/${props.data.id}`}>
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
    </StyledLink>
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
    <Select
      closeMenuOnSelect={true}
      searchable={true}
      onChange={handleBoardSelected}
      styles={StyledOptions}
      options={dataAvailableForUserBoards}
      components={{ DropdownIndicator, Option: OptionInSelect }}
      placeholder={'Search...'}
    />
  );
};
