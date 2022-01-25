import React from 'react';
import { Container } from './AddPost.styled';
import AddPostForm from '../../components/AddPostForm/AddPostForm';
import { CommentForm } from '../../components/CommentForm/CommentForm';

const AddPost = () => {
  return (
    <Container>
      <AddPostForm />
    </Container>
  );
};

export default AddPost;
