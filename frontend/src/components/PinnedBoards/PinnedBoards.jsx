import { Container, Title, TitleMainColor } from './PinnedBoards.styled';
import BoardEntry from './BoardEntry';
import { MdOutlineHomeWork, MdOutlineSportsTennis, MdOutlineBusAlert } from 'react-icons/md';

const PinnedBoards = () => {
  return (
    <Container>
      <Title>
        Pinned<TitleMainColor>Boards</TitleMainColor>
      </Title>
      <BoardEntry boardName="Łódź metropolitan area" boardIcon={<MdOutlineHomeWork />} />
      <BoardEntry boardName="Pimpek team" boardIcon={<MdOutlineSportsTennis />} />
      <BoardEntry boardName="MPK info" boardIcon={<MdOutlineBusAlert />} />
    </Container>
  );
};

export default PinnedBoards;
