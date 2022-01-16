import React from 'react';
import { Wrapper, PostIcon, PostContent, SubmitButton } from './AddPostForm.styled';

const AddPostForm = () => {
  return (
    <Wrapper>
      <PostIcon>Icon</PostIcon>
      <PostContent>Post content</PostContent>
      <SubmitButton>Add post</SubmitButton>
    </Wrapper>
  );
};

export default AddPostForm;
