import React from 'react';
import { Wrapper, Icon, TitleInput, MessageInput, SubmitInput } from './AddPostForm.styled';

const AddPostForm = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event);
  };

  return (
    <Wrapper>
      <form onSubmit={handleSubmit}>
        <Icon>Icon</Icon>
        <TitleInput type="text" deafultValue="Enter your title here..." />
        <MessageInput type="text" defaultValue="Enter your message here..." />
        <SubmitInput type="submit" value="submit" />
      </form>
    </Wrapper>
  );
};

export default AddPostForm;
