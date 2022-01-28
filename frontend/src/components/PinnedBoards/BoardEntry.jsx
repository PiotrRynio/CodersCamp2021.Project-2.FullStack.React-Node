import { Container, Item, Name, Icon } from './BoardEntry.styled';

const BoardEntry = (props) => {
  return (
    <Container>
      <Item>
        <Icon>{props.boardIcon}</Icon>
        <Name>{props.boardName}</Name>
      </Item>
    </Container>
  );
};

export default BoardEntry;
