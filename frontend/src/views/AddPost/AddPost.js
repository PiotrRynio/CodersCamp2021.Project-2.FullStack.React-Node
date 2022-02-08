import { useState } from 'react';
import { ButtonsContainer, StyledButton } from './AddPost.styled';
import PostAddingForm from 'components/PostAddingForm/PostAddingForm';
import BoardCreationForm from 'components/BoardCreationForm/BoardCreationForm';

const AddPost = () => {
  const [isPostAddChose, setIsPostAddChose] = useState(true);

  return (
    <>
      <ButtonsContainer>
        <StyledButton isSet={isPostAddChose} onClick={() => setIsPostAddChose(true)}>
          Post
        </StyledButton>
        <StyledButton isSet={!isPostAddChose} onClick={() => setIsPostAddChose(false)}>
          Board
        </StyledButton>
      </ButtonsContainer>
      {isPostAddChose ? <PostAddingForm /> : <BoardCreationForm />}
    </>
  );
};

export default AddPost;
