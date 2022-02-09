import { Container, Item, Name, Avatar } from './PinnedBoardsEntry.styled';

const BoardEntry = ({ avatar, boardName }) => {
  return (
    <Container>
      <Item>
        <Avatar src={avatar}></Avatar>
        <Name>{boardName}</Name>
      </Item>
    </Container>
  );
};

export default BoardEntry;
