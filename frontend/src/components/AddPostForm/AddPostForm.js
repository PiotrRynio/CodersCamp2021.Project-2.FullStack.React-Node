import React, { useState } from 'react';
import {
  Wrapper,
  FormTitle,
  Icon,
  TitleInput,
  MessageInput,
  SubmitInput,
} from './AddPostForm.styled';

const AddPostForm = () => {
  const [postObject, setPostObject] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setPostObject((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(postObject);
  };

  return (
    <Wrapper>
      <form onSubmit={handleSubmit}>
        <FormTitle>Add new post</FormTitle>
        <Icon>🌨</Icon>
        <TitleInput
          type="text"
          name="title"
          value={postObject.title || ''}
          onChange={handleChange}
        />
        <MessageInput
          type="text"
          name="message"
          value={postObject.message || ''}
          onChange={handleChange}
        />
        <SubmitInput type="submit" value="submit" />
      </form>
    </Wrapper>
  );
};

export default AddPostForm;
