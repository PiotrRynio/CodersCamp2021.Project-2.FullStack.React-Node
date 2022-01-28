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
  // To jest tylko do wizualizacji potem usunąć
  const descText =
    'Morbi cursus libero magna, in tincidunt justo accumsan at. Vestibulum dapibus fermentum nibh. Phasellus neque nunc, varius ac porta at, tristique nec mauris. Maecenas et tincidunt neque. Ut non justo ac velit maximus placerat vel id massa. In consequat velit vitae ante vestibulum, id aliquam justo lacinia. Sed convallis lobortis mauris in tempor.';
  const truncate = () => {
    return descText.length > 150 ? descText.substr(0, 150 - 1) + '...' : descText;
  };

  return (
    <DescriptionContainer>
      <DescriptionText>
        {truncate(descText)}
        <a href={'#'}>Read more</a>
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
