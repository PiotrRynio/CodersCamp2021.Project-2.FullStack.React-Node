import { Wrapper, ReadMore, Image, Comments } from './Announcement.styled';
import { useState } from 'react';

const Announcement = ({ title, photo, boardName, content, commentsNumber }) => {
  const [open, setOpen] = useState(() => false);

  const getShortDescription = (desc) => {
    if (desc.length > 50) {
      return desc.slice(0, 47) + '...  ';
    } else {
      return desc;
    }
  };

  const commentsString = () => {
    if (commentsNumber === 1) {
      return '[1 comment]';
    } else if (commentsNumber > 1) {
      return `[${commentsNumber} comments]`;
    } else {
      return null;
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
          <>
            <p>
              {getShortDescription(content)}
              <ReadMore onClick={() => setOpen((prev) => !prev)}>[read more]</ReadMore>
            </p>
            <Comments>{commentsString()}</Comments>
          </>
        )}
      </div>
    </Wrapper>
  );
};

export default Announcement;
