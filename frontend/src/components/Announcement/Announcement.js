import { Wrapper, ReadMore, Image } from './Announcement.styled';
import { useState } from 'react';

const Announcement = ({ title, photo, boardName, content, comentsNumber }) => {
  const [open, setOpen] = useState(() => false);

  const getShortDescription = (desc) => {
    if (desc.length > 50) {
      return desc.slice(0, 47) + '...  ';
    } else {
      return desc;
    }
  };

  return (
    <Wrapper>
      <Image src={photo} alt="Board logo" />
      <div>
        <h2>{boardName}</h2>
        <h3>{title}</h3>
        {open ? (
          <p>{content}</p>
        ) : (
          <p>
            {getShortDescription(content)}
            <ReadMore onClick={() => setOpen((prev) => !prev)}>READ MORE...</ReadMore>
          </p>
        )}
      </div>
    </Wrapper>
  );
};

export default Announcement;
