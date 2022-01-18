import React, { useState } from 'react';
import { Form, FormTitle, Icon, TitleInput, MessageInput, SubmitInput } from './AddPostForm.styled';

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
    <Form onSubmit={handleSubmit}>
      <FormTitle>Add new post</FormTitle>
      <TitleInput
        type="text"
        name="title"
        placeholder="Enter title..."
        value={postObject.title || ''}
        onChange={handleChange}
      />
      <Icon>🌨</Icon>
      <MessageInput
        type="text"
        name="message"
        placeholder="Enter message..."
        value={postObject.message || ''}
        onChange={handleChange}
      />
      <SubmitInput type="submit" value="submit" />
    </Form>
  );
};

export default AddPostForm;
