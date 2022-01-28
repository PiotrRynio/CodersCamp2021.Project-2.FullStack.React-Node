import { Container, Title, TitleMainColor, Icon, BoardName } from './PinnedBoards.styled';
import BoardEntry from './BoardEntry';
import { HiClipboardList } from 'react-icons/hi';
import { MdOutlineHomeWork, MdOutlineSportsTennis, MdOutlineBusAlert } from 'react-icons/md';

const PinnedBoards = () => {
  return (
    <Container>
      <Icon>
        <HiClipboardList />
      </Icon>
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
