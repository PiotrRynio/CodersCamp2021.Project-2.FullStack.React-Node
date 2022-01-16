import { Wrapper, TitleWrapper, Img, DescriptionWrapper, Title } from './Announcement.styled';
import { useState } from 'react';

const Announcement = ({ title, photo, boardName, description }) => {
  const [open, setOpen] = useState(() => false);

  const getShortDescription = (desc) => {
    if (desc.length > 50) {
      return desc.slice(0, 47) + '...';
    } else {
      return desc;
    }
  };

  return (
    <Wrapper onClick={() => setOpen((prev) => !prev)}>
      <TitleWrapper>
        <Img src={photo} />
        <div>
          <h2>{boardName}</h2>
          <Title>{title}</Title>
          {open ? null : <p>{getShortDescription(description)}</p>}
        </div>
      </TitleWrapper>
      {open ? (
        <DescriptionWrapper>
          <p>{description}</p>
        </DescriptionWrapper>
      ) : null}
    </Wrapper>
  );
};

export default Announcement;
