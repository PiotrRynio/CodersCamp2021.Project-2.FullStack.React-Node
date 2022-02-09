import { Container, Item, Name, Avatar } from './BoardEntry.styled';

const BoardEntry = (props) => {
  return (
    <Container>
      <Item>
        <Avatar src={props.avatar}></Avatar>
        <Name>{props.boardName}</Name>
      </Item>
    </Container>
  );
};

export default BoardEntry;
