import {
  DescriptionContainer,
  DescriptionText,
  PostInfo,
  Distance,
  IconsContainer,
  Icon,
} from './BoardDescription.styled';
import { FaEye, FaBell } from 'react-icons/fa';

const BoardDescription = ({ descriptionText, postsNumber, lastPostDate, distance }) => {
  return (
    <DescriptionContainer>
      <DescriptionText>
        In auctor nec arcu vitae consequat. Nullam vehicula justo vitae turpis gravida, a pretium
        tortor tempus. Mauris nec tortor nisl. Maecenas pharetra est sit amet ex malesuada semper.
        Donec hendrerit at lorem ut convallis.&nbsp; <a>Read more...</a>
        {descriptionText}
      </DescriptionText>
      <PostInfo>
        Posts in last month: <span>8{postsNumber}</span>, last:{' '}
        <span>12.02.2020{lastPostDate}</span>
      </PostInfo>
      <Distance>1,2{distance} km from you</Distance>
      <IconsContainer>
        <Icon>
          <FaEye />
        </Icon>
        <Icon>
          <FaBell />
        </Icon>
      </IconsContainer>
    </DescriptionContainer>
  );
};

export default BoardDescription;
