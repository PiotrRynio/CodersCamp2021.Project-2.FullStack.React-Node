import React from 'react';
import { Wrapper, Header, Icon, TitleInput, MessageInput, SubmitInput } from './AddPostForm.styled';

const AddPostForm = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event);
  };

  return (
    <Wrapper>
      <form onSubmit={handleSubmit}>
        <Header>Add new post</Header>
        <Icon>Icon</Icon>
        <TitleInput type="text" defaultValue="Enter title..." />
        <MessageInput type="text" defaultValue="Enter message..." />
        <SubmitInput type="submit" value="submit" />
      </form>
    </Wrapper>
  );
};

export default AddPostForm;
