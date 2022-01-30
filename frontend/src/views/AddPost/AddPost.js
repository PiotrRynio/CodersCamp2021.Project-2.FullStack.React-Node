import React from 'react';
import { Container } from './AddPost.styled';
import PostAddingForm from '../../components/PostAddingForm/PostAddingForm';

const AddPost = () => {
  return (
    <Container>
      <PostAddingForm />
    </Container>
  );
};

export default AddPost;
